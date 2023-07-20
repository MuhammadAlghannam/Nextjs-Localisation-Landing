/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0c1e9a;",
        secondary: "#ff992a",
        mainGray: "#919294",
        mainBlack: "#262B47",
        yellowHover: "rgb(202,138,4)",
      },

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1400px",
        xxl: "1700",
      },
    },
  },
  plugins: [],
};
