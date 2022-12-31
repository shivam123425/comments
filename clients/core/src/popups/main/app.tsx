import React from "react";
import { globalStyles } from "@styles";
import { PopupContainer } from "@components";
import { Welcome } from "@screens/welcome";

const MainPopup = () => {
  globalStyles();

  return (
    <PopupContainer>
      <Welcome />
    </PopupContainer>
  );
};

export default MainPopup;
