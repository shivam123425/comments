import { z } from "zod";
import { loginValidationSchema } from "./validations";

export enum AuthModes {
  REGISTER,
  LOGIN,
}

export interface IAuthProps {
  mode: AuthModes;
}

export type LoginValues = z.infer<typeof loginValidationSchema>;
