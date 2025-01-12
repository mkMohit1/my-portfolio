/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./public/index.html"],
  theme: {
    extend: {
      colors:{
        'primary':'#0a192f',
        'secondary':'#64ffda'
      }
    },
  },
  plugins: [],
}

