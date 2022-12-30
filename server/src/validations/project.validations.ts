import { z } from "zod";

export const createProjectSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "A project name is required" }),
  }),
});

export type ICreateProject = z.infer<typeof createProjectSchema>;

export const getProjectSchema = z.object({
  params: z.object({
    projectId: z.string({ required_error: "Project id is required" }),
  }),
});

export type IGetProject = z.infer<typeof getProjectSchema>;
