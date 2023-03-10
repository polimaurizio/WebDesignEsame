/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="light"]'],
  content:
      ["./src/**/*.{html,js}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
      ],
  theme: {
    extend: {
        fontFamily:{
            'montserrat': ['Montserrat', 'sans-serif'],
        }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
