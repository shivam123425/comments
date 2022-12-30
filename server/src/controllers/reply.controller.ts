import { prisma } from "@config";
import {
  ICreateReply,
  IGetRepliesByCommentId,
} from "@validations/replies.validations";
import { Request, Response } from "express";
import { getLoggedInUser } from "src/helpers/auth";

export const createReply = async (
  req: Request<{}, {}, ICreateReply["body"]>,
  res: Response
) => {
  const payload = req.body;
  const loggedInUser = await getLoggedInUser(req);

  const reply = await prisma.reply.create({
    data: {
      ...payload,
      authorId: loggedInUser.id,
    },
  });

  res.status(201).json({ success: true, data: reply });
};

export const getRepliesByCommentId = async (
  req: Request<
    IGetRepliesByCommentId["params"],
    {},
    {},
    IGetRepliesByCommentId["query"]
  >,
  res: Response
) => {
  const commentId = Number(req.params.commentId);
  const cursor = Number(req.query.cursor) || undefined;
  const take = Number(req.query.take) || 4;

  const replies = await prisma.reply.findMany({
    take: -take,
    skip: cursor ? 1 : 0,
    cursor: cursor ? { id: cursor } : undefined,
    where: {
      commentId,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });
  const lastResult = replies[take - 1];

  res.json({
    success: true,
    data: replies,
    pagination: {
      hasNext: replies.length >= take,
      cursor: lastResult ? lastResult.id : null,
      take,
    },
  });
};
