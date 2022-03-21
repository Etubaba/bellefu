module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bellefuGreen: "#76BA1B",
        bellefuOrange: "#FFA500",
        bellefuBackground: "#F9F9F9",
        bellefuWhite: "#FCFFF9",
        bellefuBlack1: "#3F3F3F",
        bellefuTitleBlack: "#383838",
      },
      fontFamily: {
        poppins: ["Poppins", "system-ui"],
      },
    },
  },
  plugins: [],
};
