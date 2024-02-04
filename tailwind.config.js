/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'Darkcyan': 'hsl(185, 75%, 39%)',
'Verydarkdesaturatedblue': 'hsl(229, 23%, 23%)',
'Darkgrayishblue': 'hsl(227, 10%, 46%)',
'Darkgray': 'hsl(0, 0%, 59%)',
      },

      fontFamily: {
        'kumbh': ['Kumbh Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

