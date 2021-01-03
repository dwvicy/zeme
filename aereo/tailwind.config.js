const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 
      ...defaultTheme.fontFamily.sans],
      
    },
    
    extend: {
      rotate: ['active', 'group-hover'],
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
       },
      backgroundImage: theme => ({
        'cover': "url('https://i.imgur.com/3hpncHZ.jpg')",
        'auto': "url('https://i.imgur.com/3hpncHZ.jpg')",
        
       }),
       
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
