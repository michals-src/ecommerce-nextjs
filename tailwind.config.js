const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
        "pt-sans": [
          "PT Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      colors: {
        primary: {
          DEFAULT: "#00B8A5",
          100: "#E8FFFD",
          150: "#B9FFF8",
          200: "#5CFFEF",
          300: "#00E6CF",
          400: "#00CFBA",
          500: "#00B8A5",
          600: "#009D8E",
          700: "#08376",
          800: "#00766A",
          900: "#004F47",
        },

        complement: {
          DEFAULT: "#F7CD64",
          100: "#FCEDC8",
          200: "#FBE6B1",
          300: "#FADF9B",
          400: "#F9D885",
          500: "#F7CD64",
          600: "#F4BE35",
          700: "#EBAC0C",
          800: "#BC8A0A",
          900: "#8D6707",
        },
      },
    },
  },
  plugins: [],
};
