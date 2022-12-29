import jwt, { SignOptions, VerifyOptions } from "jsonwebtoken";

interface ISignTokenParams {
  payload: object;
  secret: string;
  options?: SignOptions;
}

interface IVerifyToken {
  token: string;
  secret: string;
  options?: VerifyOptions;
}

interface ICreateAuthTokenParams {
  id: number;
}

export const signToken = ({ payload, secret, options }: ISignTokenParams) =>
  jwt.sign(payload, secret, options);

export const verifyToken = ({ token, secret, options }: IVerifyToken) =>
  jwt.verify(token, secret, options);

export const createAuthToken = (payload: ICreateAuthTokenParams) =>
  signToken({
    payload,
    secret: process.env.JWT_SECRET!,
    options: {
      expiresIn: "7d",
    },
  });

export const verifyAuthToken = (token: string) =>
  verifyToken({
    token,
    secret: process.env.JWT_SECRET!,
  });
