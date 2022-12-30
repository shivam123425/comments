-- DropIndex
DROP INDEX "Comment_id_projectId_idx";

-- DropIndex
DROP INDEX "Project_id_creatorId_idx";

-- DropIndex
DROP INDEX "Reply_id_commentId_idx";

-- DropIndex
DROP INDEX "User_id_email_idx";

-- CreateIndex
CREATE INDEX "Comment_id_idx" ON "Comment"("id");

-- CreateIndex
CREATE INDEX "Comment_projectId_idx" ON "Comment"("projectId");

-- CreateIndex
CREATE INDEX "Project_id_idx" ON "Project"("id");

-- CreateIndex
CREATE INDEX "Project_creatorId_idx" ON "Project"("creatorId");

-- CreateIndex
CREATE INDEX "Reply_id_idx" ON "Reply"("id");

-- CreateIndex
CREATE INDEX "Reply_commentId_idx" ON "Reply"("commentId");

-- CreateIndex
CREATE INDEX "User_id_idx" ON "User"("id");
