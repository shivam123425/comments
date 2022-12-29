import { prisma } from "@config";
import bcryptjs from "bcryptjs";
import { ICreateUser } from "@validations";
import { Request, Response } from "express";

export const createUser = async (
  req: Request<{}, {}, ICreateUser["body"], {}>,
  res: Response
) => {
  const { name, email, password } = req.body;
  const salt = await bcryptjs.genSalt(12);
  const hash = await bcryptjs.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hash,
    },
  });

  res.status(201).json({ data: user });
};
