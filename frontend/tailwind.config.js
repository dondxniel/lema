/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        layout: "856px",
      },
      boxShadow: {
        card: '0px 4px 8px -2px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)',
      },
    },
  },
  plugins: [],
}

