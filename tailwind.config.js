/** @type {import('tailwindcss').Config} */

const colors = {
  color1: "#5C2D2D",
  color2: "#FF48B6",
  color3: "#FFA740",
  color4: "#07B704",
  dark1: "#000000",
  light1: "#ffffff",
  light2: "#F7F7F9",
  light3: "#E4E6EB",
};

module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}", "./*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fill: { ...colors },
      fontFamily: {
        sans: ["'Poppins', sans-serif"],
      },
    },
  },
  plugins: [],
};
