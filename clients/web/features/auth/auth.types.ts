export enum AuthModes {
  REGISTER,
  LOGIN,
}

export interface IAuthProps {
  mode: AuthModes;
}
