/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-360': { 'max': '360px' },
        'max-300': { 'max': '300px' }
      }
    },
  },
  plugins: [],
}

