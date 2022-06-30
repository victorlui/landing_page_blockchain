/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "5000px" },
    },
    extend: {
      colors: {
        yellow:{
          300: "#FFEDE6;",
        },
        black: {
          300: "#5B5B5B",
          700: "#2B2B2B",
        },
        orange: {
          500: "#FF6600",
        },
        gray: {
          300: "#C0C5D2",
        },
      },
    },
  },
  plugins: [],
};
