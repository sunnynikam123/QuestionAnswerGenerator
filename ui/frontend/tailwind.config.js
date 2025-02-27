/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
        require('flowbite/plugin')
    ],
  darkMode: 'class',
  content: [
    "./node_modules/flowbite/**/*.js",
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],


  theme: {
    extend: {
      scale: {
        '200x100': '2 1', 
      },
      colors: {
        zinc: {
          750:'#1f1f22',
          850:'#252526'
        },
      },
    },
  },

}

