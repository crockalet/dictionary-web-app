/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "sans-serif": ["Inter", "Helvetica", "Tahoma", "sans-serif"],
      serif: ["Lora", "Georgia", "serif"],
      mono: ["Inconsolata", "mono"],
    },
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
      primary: "#A445ED",
      danger: "#FF5252",
    },
    extend: {
      fontSize: {
        "body-s": ["0.875rem", "1.0625rem"],
        "body-m": ["1.125rem", "1.5rem"],
        "heading-s": ["1.25rem", "1.625rem"],
        "heading-m": ["1.5rem", "1.8125rem"],
        "heading-l": [
          "4rem",
          {
            lineHeight: "4.8125rem",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
