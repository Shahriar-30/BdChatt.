/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
        'fair': ['Playfair Display', "serif"],
      },
      colors: {
        'prime': '#22309B',
      }
    },
  },
  plugins: [],
}