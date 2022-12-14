import { styled } from "@styles";

export const ToolbarWrapper = styled("div", {
  position: "fixed",
  bottom: 30,
  left: "50%",
  transform: "translateX(-50%)",
});

export const ToolbarContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 5,
  br: 99999,
  px: 12,
  backgroundColor: "$black",
  color: "$white",
  overflow: "hidden",
});

export const ToolbarItem = styled("div", {
  py: 12,
  px: 10,
  display: "flex",
  items: "center",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray",
      },
    },
  },
});
