/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      backgroundImage: {
        "factions-bg": "url('public/imgs/imperium_of_man.png')",
      }
    },
  },
  plugins: [],
};
