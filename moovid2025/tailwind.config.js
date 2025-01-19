/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        
        jersey: ['"Jersey 15"','sans-serif']
      },
    },

    colors: {
      ...colors
    }
  },
  plugins: [],
}

