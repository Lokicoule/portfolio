import { useNavigate, useLocation } from "react-router-dom";
import { translatingService } from "../../composition";
import { Lang, useTheme } from "../theme/ThemeProvider";

export class LangController {
  public createHook() {
    function useLangController() {
      const { setLang } = useTheme();
      const navigate = useNavigate();
      const location = useLocation();

      const handleLanguageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
      ) => {
        const language = event.target.value;
        const newPath = location.pathname.replace(
          /\/(en|fr)\//,
          `/${language}/`
        );

        translatingService.setLanguage(language);
        setLang(language as Lang);
        navigate(newPath, { replace: true });
      };

      return { handleLanguageChange };
    }

    return useLangController;
  }
}
