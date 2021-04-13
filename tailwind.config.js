module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '10px 10px 5px rgba(0, 0, 0, 5)',
      none: 'none',
    },

    extend: {
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
        mobile: '1fr 400px 350px 220px 300px 600px',
      },
      fontFamily: {
        scada: ['Scada', 'sans-serif'],
        cuprum: ['Cuprum', 'sans-serif'],
      },
      width: {
        sb: '30%',
        512: '512px',
      },
    },
  },
  variants: {},
  plugins: [],
};
