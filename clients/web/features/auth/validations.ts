import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "A valid email is required" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "A password of length more than 8 is required"),
});

export const registerValidationSchema = z
  .object({
    name: z
      .string({ required_error: "Your name is required" })
      .min(1, { message: "Your name is required" }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "A valid email is required" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, "A password of length more than 8 is required"),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });
