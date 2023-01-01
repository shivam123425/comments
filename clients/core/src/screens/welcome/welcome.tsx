import { Button } from "@components";
import React from "react";
import { getWebAppUrl } from "src/constants";
import {
  WelcomeHeading,
  WelcomeDescription,
  WelcomeScreenContainer,
  WelcomeScreenNote,
  WelcomeSubheading,
  WelcomeScreenFooter,
} from "./welcome.styles";

export const Welcome = () => {
  return (
    <WelcomeScreenContainer>
      <WelcomeHeading>Comments</WelcomeHeading>
      <WelcomeScreenNote>
        Comments is disabled! Please signin to get all the powers 🚀
      </WelcomeScreenNote>
      <WelcomeDescription>
        <WelcomeSubheading>
          Sign up now to unlock the following
        </WelcomeSubheading>
        <ul>
          <li>Real time collaboration</li>
          <li>Unlimited comments on any webpage</li>
        </ul>
      </WelcomeDescription>
      <a href={`${getWebAppUrl()}/login`} target="_blank" rel="noreferrer">
        <Button>Sign in</Button>
      </a>
      <WelcomeScreenFooter>
        Don&apos;t have an account?{" "}
        <a href={`${getWebAppUrl()}/register`} target="_blank" rel="noreferrer">
          Sign up
        </a>
      </WelcomeScreenFooter>
    </WelcomeScreenContainer>
  );
};
