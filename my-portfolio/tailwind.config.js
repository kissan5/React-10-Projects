/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myColor: {
          primary: "#000",
          black: "#000",
        },
      },
    },
  },
  plugins: [],
};
