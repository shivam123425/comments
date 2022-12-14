import { createStitches } from "@stitches/react";

export const { styled, theme, css, getCssText } = createStitches({
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
  theme: {
    colors: {
      black: "#222222",
      gray: "#333333",
      white: "#ffffff",
    },
  },
  utils: {
    // Abbreviated margin properties
    m: (value: string | number) => ({
      margin: value,
    }),
    p: (value: string | number) => ({
      padding: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    pt: (value: string | number) => ({
      paddingTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    pr: (value: string | number) => ({
      paddingRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    pb: (value: string | number) => ({
      paddingBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    pl: (value: string | number) => ({
      paddingLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: string | number) => ({
      borderRadius: value,
    }),
  },
});
