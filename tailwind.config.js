/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mainBg': "url('/public/images/bg.jpeg')"
      },
      fontFamily: {
        'main': ["Open Sans"]
      },
    },
  },
  plugins: [],
};
