module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        azure: {
          200: '#b3e1f6',
          500: '#8ed3f1',
          700: '#68c4ed',
          900: '#4fb6e8',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
