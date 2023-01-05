import { z } from "zod";
import { loginValidationSchema, registerValidationSchema } from "./validations";

export enum AuthModes {
  REGISTER,
  LOGIN,
}

export interface IAuthProps {
  mode: AuthModes;
}

export type LoginValues = z.infer<typeof loginValidationSchema>;
export type RegisterValues = z.infer<typeof registerValidationSchema>;
