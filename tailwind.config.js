/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-red': '#e01d20',
        'dark-gray': '#1c1e23',
        'light-gray' :'#fafafa',
        'blue' : '#099CFF'
      }
    },
  },
  plugins: [],
}

