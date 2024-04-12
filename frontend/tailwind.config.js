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
      grayCustom: "#F2EEE9",
      skyBule: "#3B9AA4",
      skyBlue100: "#ECF5F6",
      pinkCustom: "#F2E6D7",
      grayCustom2: "#D3D3D3",
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
