import { z } from "zod";

export const createReplyBody = z.object({
  body: z.string({ required_error: "A reply body is required" }),
});

export const createReplySchema = z.object({
  body: z.intersection(
    z.object({
      commentId: z.number({ required_error: "Comment id is required" }),
    }),
    createReplyBody
  ),
});

export type ICreateReply = z.infer<typeof createReplySchema>;
