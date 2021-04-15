module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        80: '21rem',
      },
      boxShadow: {
        layoutContainer: '10px 10px 10px rgba(0, 0, 0, 0.5)',
        searchbar: '5px 5px 10px rgba(0, 0, 0, 0.8)',
        sideBar: '10px 10px 10px rgba(0, 0, 0, 0.49), -10px -10px 10px rgba(5, 5, 5, 0.25)',
      },
      screens: {
        900: '900px',
      },
      gridTemplateColumns: {
        desktop: '4fr 2fr 2fr 3fr',
        mobile: '1fr 1fr',
      },
      borderRadius: {
        20: '1.25rem',
        '4xl': '30px',
      },
      gridTemplateRows: {
        desktop: '1fr 400px 300px 300px 400px',
        mobile: '1fr 400px 550px 220px 300px 600px',
      },
      fontFamily: {
        scada: ['Scada', 'sans-serif'],
        cuprum: ['Cuprum', 'sans-serif'],
      },
      width: {
        sb: '30%',
        512: '512px',
        plist: '50px',
      },
      height: {
        plist: '50px',
      },
    },
  },
  variants: {},
  plugins: [],
};
