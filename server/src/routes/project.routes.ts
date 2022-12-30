import express from "express";
import { createProject, getProjectById } from "@controllers/project.controller";
import { isLoggedIn, validate } from "@middlewares";
import { createProjectSchema, getProjectSchema } from "@validations";

const router = express.Router();

router.get(
  "/:projectId",
  validate(getProjectSchema),
  isLoggedIn,
  getProjectById
);

router.post("/", validate(createProjectSchema), isLoggedIn, createProject);

export const projectRouter = router;
