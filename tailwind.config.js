module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { min: "240px", max: "640px" },
      md: { min: "641px", max: "1007px" },
      lg: { min: "1008px", max: "1479px" },
      xl: { min: "1480px" },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
}