import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@components";
import { RegisterValues } from "./auth.types";
import { registerValidationSchema } from "./validations";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerValidationSchema),
  });
  const onSubmit: SubmitHandler<RegisterValues> = (data) => {
    console.log({ data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        type="text"
        id="name"
        label="Name"
        placeholder="Enter your name"
        error={!!errors.name}
        errorMessage={errors.name?.message}
        {...register("name")}
      />
      <Input
        type="email"
        id="email"
        label="Email"
        placeholder="Enter an email"
        error={!!errors.email}
        errorMessage={errors.email?.message}
        {...register("email")}
      />
      <Input
        type="password"
        id="password"
        label="Password"
        placeholder="Enter a password"
        error={!!errors.password}
        errorMessage={errors.password?.message}
        {...register("password")}
      />
      <Input
        type="password"
        id="confirmPassword"
        label="Confirm Password"
        placeholder="Enter confirm password"
        error={!!errors.confirmPassword}
        errorMessage={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />
      <Button type="submit" variant="contained" className="block mx-auto mt-4">
        Sign up
      </Button>
    </form>
  );
};

export default RegisterForm;
