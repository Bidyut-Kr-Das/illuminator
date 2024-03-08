/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kobe: ["KodeMono"],
        lovelo: ["Lovelo"]
      },
      backgroundColor: {
        primary: "#EADFB4",
        secondary: "#9BB0C1",
        tertiary: "#51829B",
        quaternary: "#F6995C"
      },
      colors: {
        primary: "#211951"
      }
    }
  },
  plugins: ["prettier-plugin-tailwindcss"]
};
