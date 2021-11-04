module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'offset-black': '2px 2px black',
        'offset-active-black': '5px 5px black',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
