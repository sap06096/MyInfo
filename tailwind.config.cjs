/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "0px", // mobile
      md: "769px", // tablet
      lg: "1025px", // pc
    },
    extend: {
      colors: {
        // white: "#F8F8F8",
        // whiteDk: "#F7F8F8",
        // navy: "#3182F7",
        navyBg: "#010D1D",
      },
      keyframes: {
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "slide-up": "slide-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
