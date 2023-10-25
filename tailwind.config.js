/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  purge: {
    enabled: true,
    content: [
      './*.html',
    ],
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '10rem',
        xl: '10rem',
        '2xl': '10rem',
      },
    },
    extend: {},
  },
  plugins: [],
};
