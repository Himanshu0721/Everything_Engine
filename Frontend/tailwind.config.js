/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:['class'],
  content: [
    './index.html','./src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
  	extend: {
  		screens: {
  			xl: '1220px',
  			lg: '1024px',
  			md: '768px',
  			sm: '460px',
  			xs: '320px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
