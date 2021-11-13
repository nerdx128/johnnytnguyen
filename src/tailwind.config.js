module.exports = {
  purge: ["./**/*.{js,jsx,ts,tsx}", "../public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['LemonMilk', 'Helvetica', 'Arial', 'sans-serif'],
        'lemonmilk': ['LemonMilk'],
        'lovelycoffee': ['LovelyCoffee'],
        'bloodcrow': ['BloodCrow'],
        'lovenature': ['LoveNature'],
        'terminess': ['Terminess']
      },
      textShadow: {
        'cloud-sm': '0 0 3px rgba(255,255,255,1)',
        'cloud-md': '0 0 7px rgba(255,255,255,1)',
        'cloud-lg': '0 0 11px rgba(255,255,255,1)',
      },
      zIndex: {
        '1': '1',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      width: {
        'h-screen': '100vh'
      },
      lineHeight: {
        'full': '100%'
      },
      spacing: {
        '35': '8.75rem',
        '70': '17.5rem',
        '1/10': '10%',
        '3/10': '30%',
        '7/10': '70%',
        '9/10': '90%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%'
      },
      colors: {
        'shsu-orange': '#f56423'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('tailwindcss-textshadow')
  ],
}
