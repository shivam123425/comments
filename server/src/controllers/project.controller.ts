import { prisma } from "@config";
import { ICreateProject, IGetProject } from "@validations";
import { Request, Response, NextFunction } from "express";
import { getLoggedInUser } from "src/helpers/auth";
import { z } from "zod";

export const createProject = async (
  req: Request<{}, {}, ICreateProject["body"], {}>,
  res: Response
) => {
  const loggedInUser = await getLoggedInUser(req);
  const payload = req.body;
  const project = await prisma.project.create({
    data: {
      name: payload.name,
      creatorId: loggedInUser.id,
    },
  });
  res.json({ success: true, data: project });
};

export const getProjectById = async (
  req: Request<IGetProject["params"]>,
  res: Response
) => {
  const projectId = parseInt(req.params.projectId);
  const project = await prisma.project.findUniqueOrThrow({
    where: {
      id: projectId,
    },
    include: {
      comments: true,
      creator: {
        select: {
          password: false,
          name: true,
          id: true,
          avatar: true,
        },
      },
    },
  });

  res.json({ success: true, data: project });
};
