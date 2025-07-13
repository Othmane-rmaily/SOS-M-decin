/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: "#dc2626", // red
        light: "#ffffff",
        dark: "#0f172a",
      },
      fontFamily: {
        montserrat: [
          'Montserrat',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        opensans: [
          'Open Sans',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

