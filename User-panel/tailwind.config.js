/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      "PrimaryBG":"Bg-gradient-to-r from-[#9083D5] to-[#807593]"
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}