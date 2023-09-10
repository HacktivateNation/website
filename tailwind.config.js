/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  extend: {
    colors: {
      'hacktivate-pink': '#d801e5',
    },
    textColor: {
      'text-hacktivate-pink': '#d801e5',
    },
  },
  theme: {
    extend: {
      padding: {
        'top-40em': '40em',
        'bottom-60em': '60em'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}