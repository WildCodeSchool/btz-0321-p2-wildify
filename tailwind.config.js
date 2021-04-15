module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        900: '900px',
      },
      gridTemplateColumns: {
        desktopCarousel: '1fr 1fr',
        mobileCarousel: '1fr',
      },
      gridTemplateRows: {
        mobileCarousel: '1fr 1fr 3fr',
        desktopCarousel: '1fr 2fr',
      },
    },
    variants: {},
    plugins: [],
  },
};
