import React from "react";
import { styled } from "@styles";

const StyledButton = styled("button", {
  backgroundColor: "$teal",
  borderRadius: 4,
  fontSize: 14,
  border: "0",
  position: "relative",
  cursor: "pointer",
  p: "10px 40px",
  color: "$white",
  fontWeight: 700,
});

interface ButtonProps extends React.ComponentProps<typeof StyledButton> {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <StyledButton>{props.children}</StyledButton>;
};
