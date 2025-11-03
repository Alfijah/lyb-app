/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tealBrand: "#02888d",
        darkYellow: "#ffc331",
        tealHover: "#027579",
      },
    },
  },
  plugins: [],
};
