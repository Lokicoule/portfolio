import ThemeProvider, { useTheme } from "./ThemeProvider";

const ThemeWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { mode } = useTheme();

  return <div className={mode === "dark" ? "dark" : ""}>{children}</div>;
};

const ThemeContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ThemeProvider>
  );
};

export default ThemeContainer;
