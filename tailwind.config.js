/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      boxShadow: {
        "tab-shadow": "box-shadow: inset 1px 1px 35px 50px rgba(0,0,0,0.75)"
      }
    },
  },
  plugins: [],
};
