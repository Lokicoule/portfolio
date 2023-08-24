import React from "react";
import { themeController } from "../../composition";

const ThemeContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const useTheme = themeController.getThemeHook();
  const { themeMode } = useTheme();

  return <div className={themeMode === "light" ? "" : "dark"}>{children}</div>;
};

export default ThemeContainer;
