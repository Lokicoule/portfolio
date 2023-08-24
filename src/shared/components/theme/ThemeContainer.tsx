import { useTheme } from "./Theme";

interface ThemeContainerProps {}

export const ThemeContainer: React.FC<
  React.PropsWithChildren<ThemeContainerProps>
> = ({ children }) => {
  const { themeMode } = useTheme();

  return <div className={themeMode === "light" ? "" : "dark"}>{children}</div>;
};
