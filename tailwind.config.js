/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 3px 3px rgb(0 0 0 / 3%)',
      },
      colors: {
        dark: {
          element: "#2B3945",
          background: "#202C37",
          lightText: "#111517",
          lightInput: "#858585",
        },
        light: {
          background: "#FAFAFA",
        },
      }
    },
  },
  plugins: [],
}
