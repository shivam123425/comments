import React from "react";
import { ButtonProps } from "./button.types";
import { styled } from "@styles";

const StyledButton = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
  border: "0",
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

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton data-variant={props.variant}>
      Hello {props.children}
    </StyledButton>
  );
};
