import express from "express";
import {
  createUser,
  getLoggedInUserDetails,
  loginUser,
} from "@controllers/user.controller";
import { isLoggedIn, validate } from "@middlewares";
import { createUserSchema, loginUserSchema } from "@validations";

const router = express.Router();

router.get("/details", isLoggedIn, getLoggedInUserDetails);

router.post("/register", validate(createUserSchema), createUser);

router.post("/login", validate(loginUserSchema), loginUser);

export const userRouter = router;
