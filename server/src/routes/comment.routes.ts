import express from "express";
import { isLoggedIn, validate } from "@middlewares";
import {
  createCommentSchema,
  getCommentsByProjectIdSchema,
} from "@validations/comments.validations";
import {
  createComment,
  getCommentsByProjectId,
} from "@controllers/comment.controller";

const router = express.Router();

router.get(
  "/:projectId",
  validate(getCommentsByProjectIdSchema),
  isLoggedIn,
  getCommentsByProjectId
);
router.post("/", validate(createCommentSchema), isLoggedIn, createComment);

export const commentRouter = router;
