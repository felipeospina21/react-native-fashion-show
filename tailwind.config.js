/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary" : "#450D41",
        "dark_bg" : "#110115",
        "light_bg" : "#ffffff",
        "glass_bg" : "rgba(17, 1, 21, 0.5)",
        "text_secondary" : "#F4EEB2"
      },
    },
  },
  plugins: [],
}
