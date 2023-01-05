import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "A valid email is required" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "A password of length more than 8 is required"),
});
