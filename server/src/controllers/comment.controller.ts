import { prisma } from "@config";
import {
  ICreateComment,
  IGetCommentsByProjectId,
} from "@validations/comments.validations";
import { Request, Response } from "express";
import { getLoggedInUser } from "src/helpers/auth";

export const createComment = async (
  req: Request<{}, {}, ICreateComment["body"]>,
  res: Response
) => {
  const loggedInUser = await getLoggedInUser(req);
  const { reply, ...payload } = req.body;
  await prisma.$transaction(async (tx) => {
    const comment = await tx.comment.create({
      data: {
        ...payload,
        projectId: payload.projectId,
        creatorId: loggedInUser.id,
      },
    });
    await tx.reply.create({
      data: {
        ...reply,
        authorId: loggedInUser.id,
        commentId: comment.id,
      },
    });
    const updatedComment = await tx.comment.findUniqueOrThrow({
      where: {
        id: comment.id,
      },
      include: {
        replies: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
        },
      },
    });
    res.status(201).json({
      success: true,
      data: updatedComment,
    });
  });
};

export const getCommentsByProjectId = async (
  req: Request<IGetCommentsByProjectId["params"]>,
  res: Response
) => {
  const projectId = parseInt(req.params.projectId);

  const comments = await prisma.comment.findMany({
    where: {
      projectId,
    },
  });

  res.json({ success: true, data: comments });
};
