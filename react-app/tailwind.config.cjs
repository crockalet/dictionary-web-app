/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: {
        100: "#F4F4F4",
        200: "#E9E9E9",
        300: "#757575",
        400: "#3A3A3A",
        500: "#2D2D2D",
        600: "#1F1F1F",
        700: "#050505",
      },
      white: "#FFFFFF",
      primary: "#2D2D2D",
      danger: "#838383",
    },
    extend: {},
  },
  plugins: [],
};
