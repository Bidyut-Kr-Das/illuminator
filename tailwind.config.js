/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kobe: ['KodeMono'],
        lovelo: ['Lovelo'],
        poppins: ['Poppins'],
      },
      backgroundColor: {
        primary: '#fcfcfc',
        secondary: '#138E93',
        tertiary: '#33D1A0',
        quaternary: '#2D2943',
      },
      colors: {
        primary: '#fcfcfc',
        secondary: '#138E93',
        tertiary: '#33D1A0',
        quaternary: '#2D2943',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
