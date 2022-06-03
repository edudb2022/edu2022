const width = {
  120: "30rem",
};

const schoolsColor = { cuhk: "#69246B" };

const themeColors = {
  one: {
    50: "#FFC9AF",
    100: "#FFBF9F",
    200: "#FFAC81",
    300: "#FF9A62",
    400: "#FF8239",
    500: "#FF6A10",
    600: "#E75900",
    700: "#BE4B00",
    800: "#953D00",
    900: "#6C2D00",
  },
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts29,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: width,
      colors: { schoolsColor, themeColors },
    },
  },
  plugins: [],
};
