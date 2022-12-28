import { prisma } from "@config";
import { ICreateProject } from "@validations";
import { Request, Response, NextFunction } from "express";

export const createPost = async (
  req: Request<{}, {}, ICreateProject["body"], {}>,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body;
  res.json(true);
};
