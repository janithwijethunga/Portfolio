/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        back:"#2D2D2D",
        yell:"#FFBD39"

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Jomolhari: ['Jomolhari', 'serif'],
      },
    },
  },
  plugins: [],
}