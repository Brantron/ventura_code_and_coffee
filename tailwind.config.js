/** @type {import('tailwindcss').Config} */
const cssNano = process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {},
    fontFamily: {
      header: ['Roboto Condensed', 'sans-serif'],
      regular: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [cssNano],
}
