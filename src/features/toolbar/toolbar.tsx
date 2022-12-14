import { IconButton } from "@components";
import React from "react";
import { BsChat, BsUpload } from "react-icons/bs";
import { BiMessageAltDots } from "react-icons/bi";
import {
  ToolbarContainer,
  ToolbarItem,
  ToolbarWrapper,
} from "./toolbar.styles";

export const Toolbar = () => {
  return (
    <ToolbarWrapper>
      <ToolbarContainer>
        <ToolbarItem>
          <IconButton>
            <BsChat fontSize={16} />
          </IconButton>
        </ToolbarItem>
        <ToolbarItem>
          <IconButton>
            <BiMessageAltDots fontSize={16} />
          </IconButton>
        </ToolbarItem>
        <ToolbarItem>
          <IconButton>
            <BsUpload fontSize={16} />
          </IconButton>
        </ToolbarItem>
      </ToolbarContainer>
    </ToolbarWrapper>
  );
};
