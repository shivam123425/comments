import express from "express";
import { isLoggedIn, validate } from "@middlewares";
import { createCommentSchema } from "@validations/comments.validations";
import { createComment } from "@controllers/comment.controller";

const router = express.Router();

router.post("/", validate(createCommentSchema), isLoggedIn, createComment);

export const commentRouter = router;
