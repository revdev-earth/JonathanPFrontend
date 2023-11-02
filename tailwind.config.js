/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gopher: ["Gopher", "sans"],
        nunito: ["nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
