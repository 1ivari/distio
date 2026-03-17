/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['*.{html,js}', './src/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        darkBlue: '#2573d9',
        lightBlue: '#b6d0f2',
        yellow: '#da9e00',
        grey: '#5d5d5d',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
