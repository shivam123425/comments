import { z } from "zod";

const passwordValidation = z
  .string({
    required_error: "A password of length more than 8 is required",
  })
  .min(8);

export const createUserSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "A user name is required" }),
    email: z.string({ required_error: "A valid email is required" }).email(),
    avatar: z.string().url().optional(),
    password: passwordValidation,
  }),
});

export type ICreateUser = z.infer<typeof createUserSchema>;

export const loginUserSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "A valid email is required" }).email(),
    password: passwordValidation,
  }),
});

export type ILoginUser = z.infer<typeof loginUserSchema>;
