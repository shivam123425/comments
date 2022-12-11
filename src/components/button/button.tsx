import React from "react";
import { ButtonProps } from "./button.types";

export const Button = (props: ButtonProps) => {
  return <button data-variant={props.variant}>{props.children}</button>;
};
