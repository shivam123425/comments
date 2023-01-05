import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { AuthModes, IAuthProps } from "./auth.types";

const LoginForm = dynamic(() => import("./loginForm"));
const RegisterForm = dynamic(() => import("./registerForm"));

export const Auth = ({ mode }: IAuthProps) => {
  return (
    <div className="w-full max-w-md p-6 bg-black rounded-md">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl text-white">Sign in</h1>
        <Link
          href={mode === AuthModes.LOGIN ? "/register" : "/login"}
          className="text-teal text-sm no-underline"
        >
          {mode === AuthModes.LOGIN
            ? "I don't have an account"
            : "I have an account"}
        </Link>
      </div>
      {mode === AuthModes.LOGIN ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};
