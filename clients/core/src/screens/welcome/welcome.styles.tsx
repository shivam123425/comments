import { styled } from "@styles";

export const WelcomeScreenContainer = styled("div", {
  backgroundColor: "$black",
  color: "$white",
  p: 16,
  width: "348px",
  minHeight: "200px",
});

export const WelcomeScreenNote = styled("div", {
  backgroundColor: "$mint",
  color: "$wintage",
  p: 16,
  my: 16,
  fontSize: "14px",
  lineHeight: "24px",
  border: "1px solid $wintage",
  borderRadius: 5,
});

export const WelcomeHeading = styled("h1", {
  fontSize: "16px",
  position: "relative",
  "&::after": {
    content: "for Chrome",
    marginLeft: 10,
    color: "$mint",
    fontWeight: 800,
    background: "-webkit-linear-gradient(45deg, $mint, $teal 80%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
});

export const WelcomeSubheading = styled("h3", {
  fontSize: 14,
  fontWeight: 800,
  mb: 10,
});

export const WelcomeDescription = styled("div", {
  py: 12,
  "& li": {
    position: "relative",
    pl: 32,
    fontSize: 14,
    lineHeight: "24px",
    "&::before": {
      content: "",
      position: "absolute",
      size: 24,
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      backgroundRepeat: "no-repeat",
      background: "url(../images/checkmark.svg)",
    },
  },
});

export const WelcomeScreenFooter = styled("div", {
  my: 12,
});
