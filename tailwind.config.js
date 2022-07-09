/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      typography:{
        textParagraphe : "25px",
        textTitle : "50px",

      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
      },
      colors : {
        primaryColor : "hsl(253, 96%, 82%)",
      },
    },
  },
  plugins: [],
}
