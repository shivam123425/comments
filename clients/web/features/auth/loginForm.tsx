import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@components";
import { LoginValues } from "./auth.types";
import { loginValidationSchema } from "./validations";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginValidationSchema),
  });
  const onSubmit: SubmitHandler<LoginValues> = (data) => {
    console.log({ data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
      <Button type="submit" variant="contained" className="block mx-auto mt-4">
        Sign in
      </Button>
    </form>
  );
};
