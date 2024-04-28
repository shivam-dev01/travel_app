/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      grayCustom: "#F2EEE9",
      white: "#ffffff",
      black: "#1c1c1c",
      skyBule: "#3B9AA4",
      skyBlue100: "#ECF5F6",
      pinkCustom: "#F2E6D7",
      grayCustom2: "#D3D3D3",
      gray100: "#ECF5F6",
      gray200: "#FBFBFB",
      gray500: "#6C727F",
      green100: "#E6F3EB",
      green: "#277047",
      pink200: "#FFFAF4",
      green900: "#0A808C",
      green200: "#F2FEFF",
      gray600: "#797979",
      red: "#FF0000",
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
