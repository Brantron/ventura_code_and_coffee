/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {},
    fontFamily: {
      pacifico: ['Pacifico', 'sans-serif'],
      header: ['RobotoCondensedBold', 'sans-serif'],
      regular: ['RobotoRegular', 'sans-serif'],
      bold: ['RobotoBold', 'sans-serif'],
      italic: ['RobotoItalic', 'sans-serif'],
    },
  },
  plugins: [],
}
