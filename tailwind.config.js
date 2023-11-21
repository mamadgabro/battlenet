/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: ["./index.html"],
  theme: {
    screens: {
      'moblie': '400px',
      'bigmobile':'720px',
      'tablet': '960px',
      'bigtablet':'1200px',
      'laptop': '1400px',
      'desktop': '1670px',
    },
    extend: {
      colors:{
        "0dark":"#15171e",
        "1dark":"#23252B",
        "2dark":"#303237",
        "3dark":"#ffffff",
        "empty":"#ffffffb8",
        
      }
    },
  },
  plugins: [require("daisyui")],
}