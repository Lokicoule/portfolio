import React, { createContext, useContext, useState } from "react";

export type Mode = "light" | "dark";
export type Lang = "en" | "fr";

interface ThemeContextType {
  mode: Mode;
  lang: Lang;
  setMode: (mode: Mode) => void;
  setLang: (lang: Lang) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  lang: "en",
  setMode: () => {},
  setLang: () => {},
});

const useTheme = () => {
  const { mode, setMode, lang, setLang } = useContext(ThemeContext);

  const toggleThemeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "fr" : "en");
  };

  return { mode, setMode, toggleThemeMode, lang, setLang, toggleLang };
};

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<Mode>("light");
  const [lang, setLang] = useState<Lang>("en");

  const value: ThemeContextType = {
    mode,
    lang,
    setMode,
    setLang,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
export { useTheme };
