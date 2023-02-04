/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "desafios": "url('/public/img/desafios.png')"
      }
    },
  },
  plugins: [],
};
