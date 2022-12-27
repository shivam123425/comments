import express from "express";
import { envs } from "@config";

const app = express();

app.listen(envs.PORT, () => {
  console.log(`Server is running at port ${envs.PORT}`);
});
