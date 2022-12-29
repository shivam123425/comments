import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "A user name is required" }),
    email: z.string({ required_error: "A valid email is required" }).email(),
    password: z
      .string({
        required_error: "A password of length more than 8 is required",
      })
      .min(8),
  }),
});

export type ICreateUser = z.infer<typeof createUserSchema>;
