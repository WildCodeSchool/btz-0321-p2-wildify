module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bginput: '#28292A',
        mainColor: '#00FBCE',
        bgPlaybar: '#1F1F1F',
        bgPlayerMobile: 'linear-gradient(346.15deg, rgba(0, 0, 0, 1), rgba(54, 56, 57, 0.89) 124.64%)',
      },

      spacing: {
        80: '21rem',
        97: '25rem',
      },
      boxShadow: {
        input3: '-5px -5px 10px rgba(182, 182, 182, 0.11), 5px 5px 10px rgba(0, 0, 0, 0.48)',
        input2: '5px 5px 5px rgba(0, 0, 0, 0.5), -5px -5px 5px rgba(68, 68, 68, 0.25)',
        input: 'inset 5px 5px 5px rgba(0, 0, 0, 0.8), inset -5px -5px 5px rgba(68, 68, 68, 0.25)',
        playbar: '8px 8px 15px rgba(0, 0, 0, 0.6), 10px 10px 15px rgba(255, 255, 255, 0.08)inset, -10px -10px 15px rgba(0, 0, 0, 0.5)inset',
        player: '5px 5px 15px rgba(0, 0, 0, 0.5), 10px 10px 15px rgba(255, 255, 255, 0.08)inset, -10px -10px 15px rgba(0, 0, 0, 0.5)inset',
        layoutContainer: '10px 10px 10px rgba(0, 0, 0, 0.5)',
        searchbar: '5px 5px 10px rgba(0, 0, 0, 0.8)',
        sideBar: '10px 10px 10px rgba(0, 0, 0, 0.49), -10px -10px 10px rgba(5, 5, 5, 0.25)',
        ImgPlaybar: '-5px -5px 15px rgba(255, 255, 255, 0.10), 5px 5px 10px rgba(0, 0, 0, 0.8)',
        MobilPlaybar: '-10px -10px 15px rgba(255, 255, 255, 0.10), 10px 10px 10px rgba(0, 0, 0, 0.9)',
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
        mobileCarousel: '20px 20px 3fr',
        desktopCarousel: '30px 2fr',
        desktop: '1fr 470px 300px 300px 400px',
        mobile: '1fr 450px 550px 220px 300px 690px',
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
        mpb: '95%',
        sb: '30%',
        512: '512px',
        plist: '50px',
        pbar: '73%',
      },
      height: {
        plist: '50px',
        playbarMobile: '88px',
      },
      minWidth: {
        0: '0',
        'controls-minW': '30px',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
