import { useLocation, useNavigate } from "react-router-dom";
import {
  GlobalCache,
  Language,
} from "../../../sharedKernel/persistence/GlobalCache";
import { translatingService } from "../../composition";
import { Notification } from "../../notifications/domainObjects/Notification";
import { NotificationService } from "../../notifications/notificationsService";

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
      const navigate = useNavigate();
      const location = useLocation();

      const handleLanguageChange = (language: string) => {
        console.log("handleLanguageChange", language);

        if (language === "en" || language === "fr") {
          console.log("handleLanguageChange2", language);
          const newPath = location.pathname.replace(
            /\/(en|fr)\//,
            `/${language}/`
          );

          translatingService.setLanguage(language);
          cache.set("lang", language as Language);

          navigate(newPath, { replace: true });
        } else {
          notificationService.showToast(
            Notification.createError(`Language ${language} not supported!`)
          );
        }
      };

      return { handleLanguageChange };
    }

    return useLangController;
  }
}
