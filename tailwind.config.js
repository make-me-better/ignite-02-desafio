/** @type {import('tailwindcss').Config} */
const colors = require('./src/theme/colors')

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        'nunito-regular': ['Nunito_400Regular'],
        'nunito-bold': ['Nunito_700Bold'],
      },
      fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        xl: 18,
        xxl: 24,
        '2xl': 32,
      },
    },
  },
  plugins: [],
}
