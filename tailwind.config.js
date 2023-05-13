/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: false, // 'media' or 'class',
  purge: {
    content: ['./src/pages/*.{js,ts,jsx,tsx}', './src/Components/*.{js,ts,jsx,tsx}'],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
