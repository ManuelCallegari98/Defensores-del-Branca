/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Encode Sans Condensed', 'Nunito', 'ui-sans-serif', 'system-ui'],
        // otras fuentes aquí...
      },
      colors: {
        'rojoDDB': '#870A28',
        'verdeDDB': '#00613cae',
        // ...
      },
    },
  },
  plugins: [
    "@tailwindcss/forms",
  ],
});