/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        back:"#2D2D2D",
        yell:"#FFBD39",
        brw:"#202020",

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Jomolhari: ['Jomolhari', 'serif'],
      },
      boxShadow: {
        
        sha: [
            '7px 8px 8.8px rgba(0, 0, 0, 100)'
            
        ]
      },
    },
  },
  plugins: [],
}