const width = {
  120: "30rem",
};

const schoolsColor = { cuhk: "#69246B" };

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts29,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: width,
      colors: { schoolsColor },
    },
  },
  plugins: [],
};
