import { Auth, AuthModes } from "@features";
import React from "react";

const Register = () => {
  return (
    <div className="h-full grid place-items-center">
      <Auth mode={AuthModes.REGISTER} />
    </div>
  );
};

export default Register;
