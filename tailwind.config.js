/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "992px",
        xl: "1280px",
      },
    },
    fontFamily: {
      primary: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          light: "#ffffff",
          DEFAULT: "#ffffff",
          dark: "#05151e",
        },
        secondary: {
          light: "#fafafa",
          DEFAULT: "#f2f2f2",
          dark: "#121e26",
        },
      },
    },
  },
  plugins: [],
};
