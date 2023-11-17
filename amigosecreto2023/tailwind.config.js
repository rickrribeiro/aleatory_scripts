/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bginput: "url('./assets/images/bginput.jpg')",
      },
    },
  },
  plugins: [],
};
