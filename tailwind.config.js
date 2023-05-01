/** @type {import('tailwindcss').Config} */

const forms = import("@tailwindcss/forms");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [forms],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        primary: "#b803a6",
        "primary-hover": "#7E0272",
        "brand-100": "#f4f6fc",
        "brand-200": "#E1E6F4",
        "brand-300": "#d3daef",
        "brand-400": "#C0CAE8",
        "brand-500": "#9BA9D4",
        "brand-600": "#7182B4",
        "brand-700": "#475889",
        "brand-800": "#273459",
        "brand-900": "#1A1A32",
        "brand-950": "#0E0E24",
        "brand-dark": "#0e0e24",
        "brand-dark-hover": "#1a1a32",
        "brand-lighter": "#f4f6fc",
        "brand-light": "#d3daef",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
