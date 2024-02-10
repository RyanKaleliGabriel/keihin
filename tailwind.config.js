/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      popins: 'Poppins'
    },
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1280px'
    },
    colors: {
      background: "#FBF6EE",
      black: "#000000",
      darkgrey: "#D9D9D9",
      lightgrey: "#B6C2C2" ,
      white: "#fff",
      green: "#65B741",
      lightgreen: "##B3F694",
      maroon: "#893813",
      skyblue:"#A0E9FF",
      lightblue:"#F8FBFD",
      nrmblue:"#5AB8CF"
    },
    extend: {
      height: {
        screen: '100dvh'
      },


    },
  },
  plugins: [],
};
