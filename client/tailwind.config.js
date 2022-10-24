const { borderRadius } = require("@mui/system")

const width = {
  88: "22rem",
  92: "23rem",
  120: "30rem",
  "9/10": "90%"
}
const school = { cuhk: "#69246B", hku: "#000" }

const intern = {
  summer: "rgb(255, 99, 132)",
  winter: "rgb(54, 162, 235)",
  placement: "rgb(255, 205, 86)"
}

const theme = {
  one: {
    50: "#FFF5EC",
    100: "#FFBF9F",
    200: "#FFAC81",
    300: "#FF9A62",
    400: "#FF8239",
    500: "#F2994A",
    600: "#E75900",
    700: "#BE4B00",
    800: "#953D00",
    900: "#6C2D00"
  },
  two: {
    500: "#FFF5EC"
  },
  three: {
    500: "#6F7482"
  },

  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843"
  },
  Amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d"
  }
}

//https://tailwindcss.com/docs/customizing-colors

const rating = {
  1: theme.rose,
  2: theme.pink,
  3: theme.Amber,
  4: theme.yellow,
  5: theme.teal,
  6: theme.green
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts29,jsx,tsx}"
  ],
  theme: {
    extend: {
      width: width,
      colors: { school, theme, rating, intern },
      fontSize: { xxs: "0.5rem" },
      keyframes: {
        bounceHorizontal: {
          "0%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(2px)" },
          "80%": { transform: "translateX(-2px)" },
          "100%": { transform: "translateX(0)" }
        },
        bounceVertical: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(2px)" },
          "80%": { transform: "translateY(-2px)" },
          "100%": { transform: "translateY(0)" }
        },
        borderGrayDeep: {
          "0%": { borderColor: "rgb(209 213 219)" },
          "100%": { borderColor: "rgb(55 65 81)" }
        },
        borderThemeOneDeep: {
          "0%": { borderColor: "#FFBF9F" },
          "100%": { borderColor: "#F2994A" }
        },
        discordHover: {
          "0%": {},
          "100%": {
            borderColor: "#5865F2",
            backgroundColor: "#FFFFFF",
            color: "#5865F2"
          }
        },
        themeOneHover: {
          "0%": {},
          "100%": {
            borderColor: "#F2994A",
            backgroundColor: "#FFFFFF",
            color: "#F2994A"
          }
        },
        blackBorderHover: {
          "0%": {},
          "100%": {
            borderColor: "#000",
            // backgroundColor: "#FFFFFF",
            fontWeight: 900,
            color: "#000"
          }
        },
        warningBorderHover: {
          "0%": {},
          "100%": {
            backgroundColor: "#FFFFFF",
            borderColor: "#f43f5e",
            color: "#f43f5e"
          }
        }
      },

      animation: {
        bounceHorizontal: "bounceHorizontal 1s  infinite",
        bounceVertical: "bounceVertical 1s  infinite",
        borderGrayDeep: "borderGrayDeep 1s ease-in-out forwards",
        borderThemeOneDeep: "borderThemeOneDeep 1s ease-in-out forwards",
        discordHover: "discordHover 0.5s ease-in-out forwards",
        themeOneHover: "themeOneHover 0.5s ease-in-out forwards",
        blackBorderHover: "blackBorderHover 0.5s ease-in-out forwards",
        warningBorderHover: "warningBorderHover 0.5s ease-in-out forwards"
      }
    }
  },
  plugins: []
}
