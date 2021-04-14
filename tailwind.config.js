module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      gridTemplateColumns: {
        playlist: '2fr 1fr 1fr 1.5fr',
      },
      borderRadius: {
        20: '1.25rem',
      },
      gridTemplateRows: {
        rowHeight: '1fr 350px 200px 3fr 3fr',
      },
    },
  },
  variants: {},
  plugins: [],
};
