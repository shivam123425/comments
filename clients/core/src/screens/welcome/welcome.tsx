import { Button } from "@components";
import React from "react";
import { getWebAppUrl } from "src/constants";
import {
  WelcomeHeading,
  WelcomeDescription,
  WelcomeScreenContainer,
} from "./welcome.styles";

export const Welcome = () => {
  return (
    <WelcomeScreenContainer>
      <WelcomeHeading>Comments!</WelcomeHeading>
      <WelcomeDescription>
        Welcome to comments! Signin to get started
      </WelcomeDescription>
      <a href={`${getWebAppUrl()}/login`} target="_blank" rel="noreferrer">
        <Button>Signin!!</Button>
      </a>
    </WelcomeScreenContainer>
  );
};
