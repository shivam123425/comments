import { styled } from "@styles";
import React from "react";

const StyledIconButton = styled("button", {
  backgroundColor: "transparent",
  cursor: "pointer",
  border: "none",
  fontFamily: "inherit",
  color: "inherit",
  p: 0,
});

interface IconButtonProps
  extends React.ComponentProps<typeof StyledIconButton> {
  children: React.ReactNode;
}

export const IconButton = (props: IconButtonProps) => (
  <StyledIconButton {...props} />
);
