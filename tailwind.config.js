module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['LemonMilk', 'Helvetica', 'Arial', 'sans-serif']
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
        '70': '17.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
