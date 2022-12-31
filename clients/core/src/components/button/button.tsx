import React from "react";
import { styled } from "@styles";

const StyledButton = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
  border: "0",
  position: "relative",
  cursor: "pointer",
  zIndex: 1,
  p: "8px 12px",
  "&::before": {
    content: `''`,
    display: "block",
    backgroundImage: "linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)",
    position: "absolute",
    top: "-3px",
    left: "-3px",
    width: "calc(100% + 6px)",
    height: "calc(100% + 6px)",
    borderRadius: "inherit",
    zIndex: -1,
  },
});

interface ButtonProps extends React.ComponentProps<typeof StyledButton> {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <StyledButton>{props.children}</StyledButton>;
};
