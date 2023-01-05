import { Auth, AuthModes } from "@features";
import React from "react";

const Login = () => {
  return (
    <div className="h-full grid place-items-center">
      <Auth mode={AuthModes.LOGIN} />
    </div>
  );
};

export default Login;
