/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'mainBgImage-640px': "url('/public/img/main-Bg-Image/Compressed/Perfume-Bg-Pink-640-com.png')",
        'mainBgImage-768px': "url('/public/img/main-Bg-Image/Compressed/Perfume-Bg-Pink-1920-com-crop.png')",
        'mainBgImage-1024px': "url('/public/img/main-Bg-Image/Compressed/Perfume-Bg-Pink-2048-com.png')",
      }
    },
  },
  plugins: [],
}
