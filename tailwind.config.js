/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bioGreen: "#80CC28",
        // tealBrand: "#02888d",
        tealBrand: "#026E73",
        darkYellow: "#ffc331",
        tealHover: "#027579",
        bgColor: "#F6EFE6",
      },
    },
  },
  plugins: [],
};
