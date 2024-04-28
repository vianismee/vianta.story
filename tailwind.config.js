/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ["Playfair Display", "Serif"],
        georgia: ["Georgia", "Serif"],
        lato: ["Lato", "Sans Serif"],
      },
    },
  },
  plugins: [],
}

