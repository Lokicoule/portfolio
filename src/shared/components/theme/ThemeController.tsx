import React, { createContext, useContext, useState } from "react";
import { TranslatingService } from "../../translating/translatingService";

export type Mode = "light" | "dark";
export type Lang = "en" | "fr";

interface ThemeContextType {
  mode: Mode;
  lang: Lang;
  setMode: (mode: Mode) => void;
  setLang: (lang: Lang) => void;
}

export class ThemeController {
  private mode: Mode = "light";
  private lang: Lang = "en";
  private ThemeContext: React.Context<ThemeContextType>;

  constructor(translatingService: TranslatingService) {
    this.ThemeContext = createContext<ThemeContextType>({
      mode: this.mode,
      lang: translatingService.language as Lang,
      setMode: (mode: Mode) => {
        this.mode = mode;
      },
      setLang: (lang: Lang) => {
        this.lang = lang;
      },
    });
  }

  public createProvider(): React.FC<React.PropsWithChildren> {
    const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
      const [mode, setMode] = useState<Mode>(this.mode);
      const [lang, setLang] = useState<Lang>(this.lang);

      const value: ThemeContextType = {
        mode,
        lang,
        setMode: (mode: Mode) => {
          this.mode = mode;
          setMode(mode);
        },
        setLang: (lang: Lang) => {
          this.lang = lang;
          setLang(lang);
        },
      };

      return (
        <this.ThemeContext.Provider value={value}>
          {children}
        </this.ThemeContext.Provider>
      );
    };

    return ThemeProvider;
  }

  public getModeHook() {
    const useTheme = () => {
      const { mode, setMode } = useContext(this.ThemeContext);

      const toggleThemeMode = () => {
        setMode(mode === "light" ? "dark" : "light");
      };

      return { mode, setMode, toggleThemeMode };
    };

    return useTheme;
  }

  public getLangHook() {
    const useLang = () => {
      const { lang, setLang } = useContext(this.ThemeContext);

      const toggleLang = () => {
        setLang(lang === "en" ? "fr" : "en");
      };

      return { lang, setLang, toggleLang };
    };

    return useLang;
  }
}
