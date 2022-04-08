module.exports = require('animated-tailwindcss')({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        '88': '22rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '12': '12px',
        '15': '15px'
      },
      letterSpacing: {
        vwider: '.5em'
      }
    }
  },
  plugins: [],
});

