/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      ...defaultTheme.screens,
      'sm': '475px',
    },
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '30px',
        '2xl': '50px',
      },
    }
  }
}