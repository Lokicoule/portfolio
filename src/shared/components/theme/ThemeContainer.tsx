import { themeController } from "../../composition";

const ThemeWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const useTheme = themeController.getModeHook();
  const { mode } = useTheme();

  return <div className={mode === "dark" ? "dark" : ""}>{children}</div>;
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
