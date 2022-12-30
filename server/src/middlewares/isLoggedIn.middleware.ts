import { verifyAuthToken } from "@services/token.manager";
import { Request, Response, NextFunction } from "express";

export const isLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];

  if (!token) {
    // TODO - Replace it with correct error instances
    throw new Error("You need to be logged in to perform this action");
  }
  await verifyAuthToken(token as string);
  next();
};
