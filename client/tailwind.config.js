const width = {
  120: "30rem",
  "9/10": "90%",
}
const school = { cuhk: "#69246B" }

const theme = {
  one: {
    50: "#FFC9AF",
    100: "#FFBF9F",
    200: "#FFAC81",
    300: "#FF9A62",
    400: "#FF8239",
    500: "#F2994A",
    600: "#E75900",
    700: "#BE4B00",
    800: "#953D00",
    900: "#6C2D00",
  },
  two: {
    500: "#FFF5EC",
  },
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts29,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: width,
      colors: { school, theme },
    },
  },
  plugins: [],
}
