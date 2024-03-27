/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        homeColor : '#052A3C',
        servicesBg : '#F0F1F3',
        buttonColor: '#61B34F',
     },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
        DMsans : ['DM Sans', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

