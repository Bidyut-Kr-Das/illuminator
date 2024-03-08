/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kobe: ["KodeMono"],
        lovelo: ["Lovelo"],
        poppins: ["Poppins"]
      },
      backgroundColor: {
        primary: "#E1F0DA",
        secondary: "#D4E7C5",
        tertiary: "#BFD8AF",
        quaternary: "#99BC85"
      },
      colors: {
        primary: "#211951"
      }
    }
  },
  plugins: ["prettier-plugin-tailwindcss"]
};
