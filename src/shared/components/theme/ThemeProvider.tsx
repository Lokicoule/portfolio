import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { localStorageService } from "../../composition";

export type Mode = "light" | "dark";

interface ThemeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  setMode: () => {},
});

export const useTheme = () => {
  const { mode, setMode } = useContext(ThemeContext);

  const toggleThemeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    localStorageService.setItem(
      "themeMode",
      mode === "light" ? "dark" : "light"
    );
  };

  return { mode, setMode, toggleThemeMode };
};

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const storedMode = localStorageService.getItem<Mode>("themeMode");

  const initialMode =
    storedMode ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  const [mode, setMode] = useState<Mode>(initialMode);

  const value = useMemo(() => ({ mode, setMode }), [mode, setMode]);

  useLayoutEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else if (mode === "light") {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
