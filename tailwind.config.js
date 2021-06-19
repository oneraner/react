module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      "full":'calc(100vh - 5rem)'
    },
    colors: {
      "primary":'#E04180',
      "second":'#F1ACC8',
      "background":'#F9DBE8',
      "text":'#fff',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
