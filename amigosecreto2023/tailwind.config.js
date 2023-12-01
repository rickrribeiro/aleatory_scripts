/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bginput: "url('./assets/images/bginput.jpg')",
        bgfamily: "url('./assets/images/family.jpeg')",
        bgfamily2: "url('./assets/images/family3.png')",
      },
    },
  },
  plugins: [],
};
