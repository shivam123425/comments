import express from "express";
import { createPost } from "@controllers/project.controller";
import { validate } from "@middlewares";
import { createProjectSchema } from "@validations";

const router = express.Router();

router.post("/", validate(createProjectSchema), createPost);

export const projectRouter = router;
