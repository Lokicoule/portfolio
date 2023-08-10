import "./App.css";
import FrontPage from "./pages/frontPage/FrontPage";

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  console.log("dark");
  document.documentElement.classList.add("dark");
} else {
  console.log("light");
  document.documentElement.classList.remove("dark");
}

export default function App() {
  return <FrontPage />;
}
