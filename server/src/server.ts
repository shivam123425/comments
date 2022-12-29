import { envs, connectDB } from "@config";
import express, { Request, Response, NextFunction } from "express";
require("express-async-errors");
import cors from "cors";
import helmet from "helmet";
import { projectRouter, userRouter } from "@routes";

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());

// Initialise routes
app.use("/project", projectRouter);
app.use("/user", userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  next(err);
});

(async () => {
  await connectDB();
  app.listen(envs.PORT, () => {
    console.log(`Server is running at port ${envs.PORT}`);
  });
})();
