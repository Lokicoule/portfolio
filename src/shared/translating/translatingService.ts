import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export class TranslatingService {
  public translate(key: string): string {
    return i18next.t(key);
  }

  public init(): void {
    i18next.use(LanguageDetector).init({
      fallbackLng: "en",
      debug: true,
      interpolation: {
        escapeValue: false,
      },
      resources: {
        en: {
          translation: {
            pageNotFound: "the page you are looking for does not exist",
            backToHome: "Back to home",
          },
        },
        fr: {
          translation: {
            pageNotFound: "la page que vous recherchez n'existe pas",
            backToHome: "Retour à la page d'accueil",
          },
        },
      },
    });
  }
}
