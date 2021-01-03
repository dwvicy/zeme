const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 
      ...defaultTheme.fontFamily.sans],
      
    },
    
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
