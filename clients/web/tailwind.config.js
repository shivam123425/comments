const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        black: "#222831",
        grey: "#393E46",
        offwhite: '#FAF9F6',
        teal: "#00ADB5",
        mint: "#A5F1E9",
        wintage: "#0E5E6F",
        white: "#EEEEEE",
        error: "#ff8a8a",
      },
    },
  },
  plugins: [],
};
