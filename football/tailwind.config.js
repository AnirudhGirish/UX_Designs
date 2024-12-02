/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'foot-dark': '#395459',
        'foot-mid': '#a1c2a1',
        'foot-light': '#f7f0c8',
        // 'foot-dark': '#003554',
        // 'foot-mid': '#006494',
        // 'foot-light': '#0582ca',
      },
    },
  },
  plugins: [],
}