import React from "react";
import { IAuthProps } from "./auth.types";
import { LoginForm } from "./loginForm";

export const Auth = (props: IAuthProps) => {
  return (
    <div className="w-full max-w-md p-6 bg-black rounded-md">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl text-white">Sign in</h1>
        <a className="text-teal text-sm no-underline">
          I don't have an account
        </a>
      </div>
      <LoginForm />
    </div>
  );
};
