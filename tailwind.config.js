module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx,js,jsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        'fixed-width':'600px',
        'min-width':'375px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
