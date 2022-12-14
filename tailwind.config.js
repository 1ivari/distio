/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}',"./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'darkBlue': '#2573d9',
        'lightBlue': '#b6d0f2',
        'yellow': '#da9e00',
        'grey': '#5d5d5d',
        'black': '#000000',
      },
    },
  },
  fontFamily: {
    sans: ['Lato', 'sans-serif'],
  },
  plugins: [require('flowbite/plugin')],
}
