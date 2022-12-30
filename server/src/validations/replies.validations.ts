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

export const getRepliesByCommentIdSchema = z.object({
  params: z.object({
    commentId: z.string({ required_error: "Comment id is required" }),
  }),
  query: z.object({
    cursor: z.string().optional(),
    take: z.string().optional(),
  }),
});

export type IGetRepliesByCommentId = z.infer<
  typeof getRepliesByCommentIdSchema
>;
