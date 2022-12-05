/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
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
  plugins: [],
}
