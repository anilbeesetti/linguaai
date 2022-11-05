/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#32b3b3",
          100: "#28a9a9",
          200: "#1e9f9f",
          300: "#149595",
          400: "#0a8b8b",
          500: "#008181",
          600: "#007777",
          700: "#006d6d",
          800: "#006363",
          900: "#005959",
        },
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
