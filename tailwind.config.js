const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#121212",
        "main-green": "#27FB6B",
        "secondary-green": "#329F5B",
        "main-white": "#fff",
        "gray-primary": "#E1E1E1",
        "gray-secondary": "#ECECEC",
        "black-secondary": "#181818",
        "black-tertiary": "#2B2B2B",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
