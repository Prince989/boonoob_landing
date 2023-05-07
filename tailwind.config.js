/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      screens: { 'xs': { 'max': '640px' }, },
      colors: {
        "primary": "#5C65FF"
      },
      fontFamily : {
        "interlight" : ["InterLight"],
        "intermedium" : ["InterMedium"],
        "intersemibold" : ["InterSemibold"],
        "interregular" : ["InterRegular"],
      }
    },
    maxWidth: {
      '330p' : "330px"
    },
    minWidth : {
      '38p' : "38px"
    }
  },
  plugins: [],
}
