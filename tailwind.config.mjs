/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e33f3f',
        secondary: '#480101',
        accent: '#700808',
        shadow:"#fc7e7e",
        light: '#f8e6e6',
        danger: '#EF4444',
      }
    }
  },
  plugins: []
}
