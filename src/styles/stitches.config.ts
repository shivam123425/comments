import { createStitches } from "@stitches/react";

export const { styled, theme, css } = createStitches({
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
  utils: {
    // Abbreviated margin properties
    m: (value: number) => ({
      margin: value,
    }),
    mt: (value: number) => ({
      marginTop: value,
    }),
    mr: (value: number) => ({
      marginRight: value,
    }),
    mb: (value: number) => ({
      marginBottom: value,
    }),
    ml: (value: number) => ({
      marginLeft: value,
    }),
    mx: (value: number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // A property for applying width/height together
    size: (value: number) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: number) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: number) => ({
      borderRadius: value,
    }),
  },
});
