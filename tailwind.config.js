/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    theme: {
      extend: {
        colors : {
          darkestblue : `#15244A`,
          darkblue : `#18416C`,
          lightblue : `#8AD0EB`,
          darkcream : `#E1D3D0`,
          lightcream : `#F9DBD1`,
          lightestcream : `#F9E4DA`,
          lightestpurple : `#8E94B6`,
          lightpurplered : `#996C92`,
          darkpurplered : `#84375C`
        },
        fontFamily: {
          helvetica: ['HelveticaNeueCyr', 'sans-serif'],
        },
        fontWeight: {
          light: 100,
          roman: 200,
          medium: 500,
          bold: 700,
        }
      },
    },
  },
  plugins: [],
}