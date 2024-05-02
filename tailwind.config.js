/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light"]
  },
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
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
  ],
}

