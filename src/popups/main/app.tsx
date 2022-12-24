import React from "react";
import { globalStyles } from "@styles";
import { Button, PopupContainer } from "@components";

const MainPopup = () => {
  globalStyles();

  return (
    <PopupContainer>
      <Button variant="primary">Click here 3</Button>
    </PopupContainer>
  );
};

export default MainPopup;
