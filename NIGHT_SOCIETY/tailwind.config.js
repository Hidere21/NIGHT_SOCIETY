/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        nigthsociety: "#571673"
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated')
  ],
}