/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1220px', 
        'lg': '1024px',
        'md': '768px',
        'sm': '460px',
        'xs': '320px',
      },
    },
  },
  plugins: [],
}
