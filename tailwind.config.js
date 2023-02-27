/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#F0F5F9',
        'light-blue': '#C9D6DF',
        'dark-grey': '#52616B',
        'black': '#1E2022',
        'tan': '#EDF1D6'
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: '-translate-x-96'
          },
          '100%': {
            transform: 'translate-x-128'
          }
          
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        slideIn: 'slideIn 2s forwards',
        wiggle: 'wiggle 1s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ]}
