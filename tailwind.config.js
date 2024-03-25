/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveNumberOut: {
          "0%": { marginTop: "0" },
          "30%": { marginTop: "-1.2em" },
          "100%": { marginTop: "-1.2em" },
        },
      },
      animation: {
        moveNumberOut: "moveNumberOut 1s",
      },
      fontFamily: {
        natoBn: ["Noto Sans Bengali", "sans"],
      },
      boxShadow: {
        allSide: "0 0 16px 0 rgba(0, 0, 0, 0.08)",
      },
      dropShadow: {
        allSide: "0 0 16px 0 rgba(0, 0, 0, 0.08)",
      },

      colors: {
        docBlue: {
          50: "#EAF2FF",
          900: "#136AFB",
        },
        docRed: {
          50: "#FEECEC",
          900: "#EA4040",
        },
        docWhite: {
          50: "#EAF2FF",
          100: "#AAAAAA",
          200: "#F5F5F5",
          500: "#747474",
          700: "#353535",
          600: "#262626",
          800: "#2B2B2B",
          900: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
