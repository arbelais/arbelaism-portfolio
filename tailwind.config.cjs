/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Montserrat: ["Montserrat Alternates", "sans-serif"],
      Mulish: ["Mulish", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
