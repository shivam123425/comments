import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MainPopup from "./app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MainPopup />
  </StrictMode>
);
