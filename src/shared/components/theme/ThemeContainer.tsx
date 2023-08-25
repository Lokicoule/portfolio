import { themeController } from "../../composition";

const ThemeWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const useTheme = themeController.getThemeHook();
  const { themeMode } = useTheme();

  return <div className={themeMode === "dark" ? "dark" : ""}>{children}</div>;
};

const ThemeContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const ThemeProvider = themeController.createProvider();

  return (
    <ThemeProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ThemeProvider>
  );
};

export default ThemeContainer;
