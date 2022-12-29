import { prisma } from "@config";
import bcryptjs from "bcryptjs";
import { ICreateUser, ILoginUser } from "@validations";
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
    select: {
      password: false,
      id: true,
      email: true,
      name: true,
    },
  });

  res.status(201).json({ data: user, success: true });
};

export const loginUser = async (
  req: Request<{}, {}, ILoginUser["body"], {}>,
  res: Response
) => {
  const { email, password } = req.body;

  const existingUser = await prisma.user.findUniqueOrThrow({
    where: {
      email,
    },
  });
  const isPasswordAMatch = await bcryptjs.compare(
    password,
    existingUser.password
  );
  if (!isPasswordAMatch) {
    // throw invalid credential error
    throw new Error("Invalid email or password");
  }

  // TODO - Attach jwt in a cookie
  res.json({ success: true });
};
