import { envs, connectDB, initAWS } from "@config";
import express, { Request, Response, NextFunction } from "express";
require("express-async-errors");
import cors from "cors";
import helmet from "helmet";
import { projectRouter, userRouter } from "@routes";
import { z } from "zod";

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());

// Initialise routes
app.use("/project", projectRouter);
app.use("/user", userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  let errorPayload: { error: true; message: string; issues?: z.ZodIssue[] } = {
    error: true,
    message: err.message,
  };
  if (err instanceof z.ZodError) {
    errorPayload.message = "Validation error";
    errorPayload.issues = err.issues;
  }
  res.json(errorPayload);
});

(async () => {
  await initAWS();
  await connectDB();
  app.listen(envs.PORT, () => {
    console.log(`Server is running at port ${envs.PORT}`);
  });
})();
