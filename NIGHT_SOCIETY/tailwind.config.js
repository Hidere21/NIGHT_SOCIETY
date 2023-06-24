/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        nightpurple: "#571673",
        nightblue: "#190F40",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "main-friends": "url('assets/img-amigos/Fondo-NS.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
