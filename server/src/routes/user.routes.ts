import express from "express";
import { createUser } from "@controllers/user.controller";
import { validate } from "@middlewares";
import { createUserSchema } from "@validations";

const router = express.Router();

router.post("/register", validate(createUserSchema), createUser);

export const userRouter = router;
