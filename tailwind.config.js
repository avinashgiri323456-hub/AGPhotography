/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf6ec',
          100: '#f7edcc',
          200: '#ecd994',
          300: '#e0c566',
          400: '#c5a253',
          500: '#b08a3a',
          600: '#94702d',
          700: '#755527',
          800: '#5f4424',
          900: '#523a22',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
