/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { dmSans: ["DM Sans", "sans-serif"] },
    colors: {
      greenLight: "#E4F3DA",
      white: "white",
      black: "black",
      green: "#9CBE97",
      grey: "#3A3B3C",
      lightgrey: "#f2f2f2",
      graugrün: "#A2A996",
      transparent: "transparent",
    },
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
        caret: "typewriter 2s steps(11) forwards, blink 1s steps(11)  2s",
        spin: "spin 6s linear infinite",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
