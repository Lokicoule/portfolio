import React, { createContext, useContext, useState } from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

export class ThemeController {
  private themeMode: ThemeMode = "light";
  private ThemeContext: React.Context<ThemeContextType>;

  constructor() {
    this.ThemeContext = createContext<ThemeContextType>({
      themeMode: this.themeMode,
      setThemeMode: (mode: ThemeMode) => {
        this.themeMode = mode;
      },
    });
  }

  public createProvider(): React.FC<React.PropsWithChildren> {
    const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
      const [themeMode, setThemeMode] = useState<ThemeMode>(this.themeMode);

      const value: ThemeContextType = {
        themeMode,
        setThemeMode: (mode: ThemeMode) => {
          this.themeMode = mode;
          setThemeMode(mode);
        },
      };

      return (
        <this.ThemeContext.Provider value={value}>
          <div className={value.themeMode === "light" ? "" : "dark"}>
            {children}
          </div>
        </this.ThemeContext.Provider>
      );
    };

    return ThemeProvider;
  }

  public getThemeHook() {
    const useTheme = () => {
      const { themeMode, setThemeMode } = useContext(this.ThemeContext);

      const toggleThemeMode = () => {
        const mode = themeMode === "light" ? "dark" : "light";
        setThemeMode(mode);
      };

      return { themeMode, setThemeMode, toggleThemeMode };
    };

    return useTheme;
  }
}
