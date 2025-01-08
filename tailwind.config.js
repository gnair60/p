/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        blue1: '#c0c8d0',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
