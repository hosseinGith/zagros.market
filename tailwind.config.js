/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      submitPageColorBorderLowBlack: "#e7eaec",
      submitPageColorBorderBlue: "#68a5fe",
      lowGray: "#424750",
      redColor: "#ec1d37",
      whiteColor: "#fff",
      blackColor: "#000",
      linkColor: "#68a5fe",
      primary: "#ef4056",
      inputSearchBar: "#f0f0f1",
      headerLinksBgColor: "#fde5e8",
      lowGreenColor: "#28a745",
      headerNavBgColor: "#f5f5f5",
      lowOpacityColorBg: "#00000059",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
