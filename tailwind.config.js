module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainColor: '#00FBCE',
        bgPlaybar: '#1F1F1F',
      },
      spacing: {
        80: '21rem',
      },
      boxShadow: {
        playbar: '10px 10px 15px rgba(0, 0, 0, 0.9), 10px 10px 15px rgba(255, 255, 255, 0.08)inset, -10px -10px 15px rgba(0, 0, 0, 0.5)inset',
        layoutContainer: '10px 10px 10px rgba(0, 0, 0, 0.5)',
        searchbar: '5px 5px 10px rgba(0, 0, 0, 0.8)',
        sideBar: '10px 10px 10px rgba(0, 0, 0, 0.49), -10px -10px 10px rgba(5, 5, 5, 0.25)',
        ImgPlaybar: '-5px -5px 15px rgba(255, 255, 255, 0.10), 5px 5px 10px rgba(0, 0, 0, 0.8)',
      },
      screens: {
        900: '900px',
      },
      gridTemplateColumns: {
        desktop: '4fr 2fr 2fr 3fr',
        mobile: '1fr 1fr',
      },
      inset: {
        almost: '90%',
      },
      gridTemplateRows: {
        mobileCarousel: '1fr 1fr 3fr',
        desktopCarousel: '1fr 2fr',
        desktop: '1fr 400px 300px 300px 400px',
        mobile: '1fr 400px 550px 220px 300px 700px',
      },
      borderRadius: {
        20: '1.25rem',
        '4xl': '30px',
      },
      fontFamily: {
        scada: ['Scada', 'sans-serif'],
        cuprum: ['Cuprum', 'sans-serif'],
        Orbit: ['Orbitron', 'monospace'],
      },
      width: {
        sb: '30%',
        512: '512px',
        plist: '50px',
        pbar: '73%',
      },
      height: {
        plist: '50px',
      },
      minWidth: {
        0: '0',
        'controls-minW': '200px',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
    },
  },
  variants: {},
  plugins: [],
};
