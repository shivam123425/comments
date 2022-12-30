import express from "express";
import { isLoggedIn, validate } from "@middlewares";
import { createReplySchema } from "@validations/replies.validations";
import { createReply } from "@controllers/reply.controller";

const router = express.Router();

router.post("/", validate(createReplySchema), isLoggedIn, createReply);

export const replyRouter = router;
