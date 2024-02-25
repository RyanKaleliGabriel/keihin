/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      popins: "Poppins",
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1280px",
    },
    colors: {
      background: "#FBF6EE",
      black: "#000000",
      darkgrey: "#737979",
      lightgrey: "#B6C2C2",
      white: "#fff",
      green: "#65B741",
      lightgreen: "##B3F694",
      maroon: "#893813",
      skyblue: "#A0E9FF",
      lightblue: "#F8FBFD",
      nrmblue: "#5AB8CF",
      navblue:"#E0F7F8",
      orange:"#DF6035",
      purple: "#CB6CE6"
    },
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
