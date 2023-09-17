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
          DEFAULT: "#9ca3af",
          dark: "#373f51",
        },
      },
      colors: {
        primary: {
          light: "#ffffff",
          DEFAULT: "#E1D4BB",
          dark: "#05151e",
        },
        secondary: {
          light: "#fafafa",
          DEFAULT: "#f2f2f2",
          dark: "#121e26",
        },
      },
      textColor: {
        primary: {
          light: "text-gray-200",
          DEFAULT: "text-gray-400",
          dark: "text-gray-700",
        },
      },
    },
  },
  plugins: [],
};
