/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        grStart: "hsl(347, 100%, 66%)",
        drkSlate: "hsl(234, 29%, 20%)",
        charcoal: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
      },
    },
  },
  plugins: [],
};
