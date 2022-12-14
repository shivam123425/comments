import React from "react";

type ButtonVariants = "primary" | "secondary";

export interface ButtonProps {
  children: React.ReactNode;
  variant: ButtonVariants;
}
