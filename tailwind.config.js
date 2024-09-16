/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Just Another Hand', 'normal'],
        body: ['Just Another Hand', 'normal'],
      },
      colors: {
        gold: {
          500: '#D4AF37',
          600: '#C09F30',
          700: '#AD8F29',
        },
      },
    },
  },
  plugins: [],
}
