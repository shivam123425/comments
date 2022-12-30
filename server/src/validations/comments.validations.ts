import { z } from "zod";
import { createReplyBody } from "./replies.validations";

export const createCommentSchema = z.object({
  body: z.object({
    projectId: z.number({ required_error: "Project id is required" }),
    coordinates: z
      .array(z.number(), { required_error: "Coordinates are required" })
      .length(4, "Invalid coordinates"),
    dimensions: z
      .array(z.number(), { required_error: "Dimensions are required" })
      .length(2, "Invalid dimensions"),
    reply: createReplyBody,
  }),
});

export type ICreateComment = z.infer<typeof createCommentSchema>;

export const getCommentsByProjectIdSchema = z.object({
  params: z.object({
    projectId: z.string({ required_error: "Project id is required" }),
  }),
});

export type IGetCommentsByProjectId = z.infer<typeof getCommentsByProjectIdSchema>;
