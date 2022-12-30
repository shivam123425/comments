import { prisma } from "@config";
import bcryptjs from "bcryptjs";
import { ICreateUser, ILoginUser } from "@validations";
import { Request, Response } from "express";
import { createAuthToken } from "@services/token.manager";
import { getLoggedInUser } from "src/helpers/auth";

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
    // TODO - Throw custom error objects which has status as well
    throw new Error("Invalid email or password");
  }

  const authToken = await createAuthToken({
    id: existingUser.id,
  });
  res.setHeader("Authorization", authToken);
  res.json({ success: true });
};

export const getLoggedInUserDetails = async (req: Request, res: Response) => {
  const loggedInUser = await getLoggedInUser(req, true);

  res.json({ success: true, data: loggedInUser });
};
