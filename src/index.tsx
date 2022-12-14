"use client";

import React from "react";
import { Toolbar } from "@features/toolbar";

const ReactPreviewComments = () => {
  return (
    <>
      <Toolbar />
    </>
  );
};

export { getCssText } from "@styles";

export default React.memo(ReactPreviewComments);
