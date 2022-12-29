import express from "express";
import { createUser, loginUser } from "@controllers/user.controller";
import { validate } from "@middlewares";
import { createUserSchema, loginUserSchema } from "@validations";

const router = express.Router();

router.post("/register", validate(createUserSchema), createUser);

router.post("/login", validate(loginUserSchema), loginUser);

export const userRouter = router;
