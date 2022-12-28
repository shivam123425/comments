import { z } from "zod";

export const createProjectSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "A project name is required" }),
  }),
});

export type ICreateProject = z.infer<typeof createProjectSchema>;
