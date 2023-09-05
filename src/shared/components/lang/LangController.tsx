import { useNavigate, useLocation } from "react-router-dom";
import { translatingService } from "../../composition";
import { Lang, useTheme } from "../theme/ThemeProvider";
import { GlobalCache, Language } from "../../persistence/GlobalCache";
import { NotificationService } from "../../notifications/notificationsService";
import { Notification } from "../../notifications/domainObjects/Notification";

// lang from key in cache
export class LangController {
  constructor(
    private readonly cache: GlobalCache,
    private readonly notificationService: NotificationService
  ) {}

  public createHook() {
    const cache = this.cache;
    const notificationService = this.notificationService;

    function useLangController() {
      const { setLang } = useTheme();
      const navigate = useNavigate();
      const location = useLocation();

      const handleLanguageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
      ) => {
        const language = event.target.value;
        if (language === "en" || language === "fr") {
          const newPath = location.pathname.replace(
            /\/(en|fr)\//,
            `/${language}/`
          );

          translatingService.setLanguage(language);
          setLang(language as Lang);
          navigate(newPath, { replace: true });

          cache.set("lang", language as Language);
        } else {
          notificationService.showToast(
            Notification.createError(`Language ${language} not supported!`)
          );
        }

        console.log(cache);
      };

      return { handleLanguageChange };
    }

    return useLangController;
  }
}
