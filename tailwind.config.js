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
      borderColor: {
        primary: {
          light: "#e5e7eb",
          dark: "#373f51",
        },
      },
      colors: {
        primary: {
          light: "#ffffff",
          dark: "#05151e",
        },
        secondary: {
          light: "#fafafa",
          dark: "#121e26",
        },
      },
      textColor: {
        primary: {
          light: "#000000",
          dark: "#ffffff",
        },
        secondary: {
          light: "#121e26",
          dark: "#FAF7F0",
        },
      },
    },
  },
  plugins: [],
};
