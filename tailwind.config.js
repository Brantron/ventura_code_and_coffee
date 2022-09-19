/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {},
    fontFamily: {
      pacifico: ['Pacifico', 'sans-serif'],
      header: ['Roboto Condensed', 'sans-serif'],
      regular: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
