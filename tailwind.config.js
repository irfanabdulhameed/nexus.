module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: { A100: "#f4ad7d" },
        green: { 100: "#cbeabc", 800: "#1a8917" },
        light_green: { 300: "#a9d992" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        blue_gray: {
          100: "#cdd1d4",
          200: "#b0b8bc",
          300: "#939ea4",
          400: "#898989",
          600: "#5d6970",
          900: "#28353d",
          "900_02": "#2f2f2f",
          "900_01": "#2d2d2d",
          "900_03": "#111b47",
        },
        gray: {
          700: "#606161",
          800: "#3f3f3f",
          900: "#091133",
          "900_02": "#282828",
          "900_01": "#292929",
          "700_01": "#5c5c5c",
        },
        orange: { 200: "#ffcd9c" },
        blue: { 50: "#e7ecff" },
        indigo: { 200: "#929ecc", 300: "#6f7cb2", 800: "#37447e" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { roboto: "Roboto", stapel: "Stapel", inter: "Inter" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
