/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008181",
        primary_hover: "#006d6d",
        primary_surface: "#F3F5FB",
        text_primary: "#373B52",
        primary_green: "#35999A",
        primary_green_surface: "#D8F0F0",
        primary_red_surface: "#F0D8D8",
      },
      textColor: {
        primary: "#373B52",
      },
    },
  },
  plugins: [],
};
