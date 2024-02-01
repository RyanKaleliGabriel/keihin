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
      lightgrey: "#F1EFEF",
      white: "#fff",
      green: "#65B741",
      lightgreen: "##B3F694",
      orange: "##FFB534",
      maroon: "#893813",
    },
    extend: {
      height: {
        screen: '100dvh'
      },
      minWidth: {
        'img': "2rem"
      },
      gridTemplateRows: {
        'layout': 'auto 3fr auto'
      },
    },
  },
  plugins: [],
};
