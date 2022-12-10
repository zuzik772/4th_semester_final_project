/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./public/index.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      light: "#F2F2F2",
      darkerLight: "#D9D9D9",
      dark: "#202021",
      accent: "#E07B23",
      fadedAccent: "#FFC18A",
      white: "#FDFDFD",
      fadedBlue: "#639AF1",
    },
    fontFamily: {
      mainFont: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
