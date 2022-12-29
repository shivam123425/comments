/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE INDEX "Comment_id_projectId_idx" ON "Comment"("id", "projectId");

-- CreateIndex
CREATE INDEX "Project_id_creatorId_idx" ON "Project"("id", "creatorId");

-- CreateIndex
CREATE INDEX "Reply_id_commentId_idx" ON "Reply"("id", "commentId");

-- CreateIndex
CREATE INDEX "User_id_email_idx" ON "User"("id", "email");
