import { useTheme } from "../theme/ThemeProvider";

export class ModeController {
  public createHook() {
    function useModeController() {
      const { toggleThemeMode } = useTheme();

      const handleToggleTheme = () => {
        toggleThemeMode();
      };

      return { handleToggleTheme };
    }

    return useModeController;
  }
}
