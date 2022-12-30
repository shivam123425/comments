import express from "express";
import { isLoggedIn, validate } from "@middlewares";
import {
  createReplySchema,
  getRepliesByCommentIdSchema,
} from "@validations/replies.validations";
import {
  createReply,
  getRepliesByCommentId,
} from "@controllers/reply.controller";

const router = express.Router();

router.get(
  "/:commentId",
  validate(getRepliesByCommentIdSchema),
  isLoggedIn,
  getRepliesByCommentId
);

router.post("/", validate(createReplySchema), isLoggedIn, createReply);

export const replyRouter = router;
