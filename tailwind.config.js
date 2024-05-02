/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "744px",
        lg: "976px",
        xl: "1440px",
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "spin-fast": "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
