/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Inria: ["Inria Sans", "serif"],
      },
      colors: {
        "dark-green": "#264653",
        "forest-green": "#2a9d8f",
        mustard: "#e9c46a",
        cream: "#F6F7EB",
        crimson: "#E94F37",
        "dark-grey": "#393E41",
        "navy-blue": "#08415C",
        "bold-red": "#CC2936",
        "dark-bold-red": "#A3212B",
        "light-bold-red": "#e84b58",
      },
    },
  },
  plugins: [],
};
