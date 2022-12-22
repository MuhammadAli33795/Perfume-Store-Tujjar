/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'tableImage': "url('/img/Bgtable2.jpg')",
        'Bgimage': "url('/img/BGblue.png')",
        'tableImageTheme2': "url('/img/tableBlack.jpg')",
        'BgimageTheme2': "url('/img/blackGoldBG.jpg')",
      }
    },
  },
  plugins: [],
}
