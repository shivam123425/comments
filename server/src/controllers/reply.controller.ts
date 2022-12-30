import { prisma } from "@config";
import { ICreateReply } from "@validations/replies.validations";
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
