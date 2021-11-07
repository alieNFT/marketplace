module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#33ee12",
        gray: {
          darkest: "#161616",
          dark: "#3c4858",
          default: "#dadada",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
      },
      fontFamily: {
        alien: ["Orbitron", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
      },
      extend: {
        transitionProperty: {
          width: "width",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
