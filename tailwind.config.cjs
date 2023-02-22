/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleStart: '#6844cf',
        purpleEnd: '#3104b0',
        purpleCircle: '#4515cf',
        blueButton: '#333359',
        hoverBlueButton: '#434373'
      },
      fontFamily: {
        lato: ['Lato']
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "810px",
    },
  },

  plugins: [],
}