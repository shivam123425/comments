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

export const signToken = ({ payload, secret, options }: ISignTokenParams) => {
  return new Promise<string>((res) => {
    jwt.sign(payload, secret, options || {}, (err, encoded) => {
      if (err || !encoded) {
        throw err;
      }
      return res(encoded);
    });
  });
};

export const verifyToken = ({ token, secret, options }: IVerifyToken) => {
  return new Promise<string | jwt.Jwt | jwt.JwtPayload>((res) => {
    jwt.verify(token, secret, options || {}, (err, decoded) => {
      if (err || !decoded) {
        throw err;
      }
      return res(decoded);
    });
  });
};

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
  }) as Promise<ICreateAuthTokenParams>;
