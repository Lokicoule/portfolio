import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import DOMPurify from "dompurify";

import fr from "./locales/fr.json";
import en from "./locales/en.json";

export class TranslatingService {
  public translate(key: string): string {
    return i18next.t(key);
  }

  public translateAndSanitize(key: string): string {
    return DOMPurify.sanitize(i18next.t(key));
  }

  public setLanguage(language: string): void {
    if (language === "fr" || language === "en")
      i18next.changeLanguage(language);
  }

  public get language(): string {
    const defaultLang = "en";

    if (i18next.language === "fr" || i18next.language === "en")
      return i18next.language;

    const fallback = i18next.languages[0].split("-")[0];
    if (fallback === "fr" || fallback === "en") return fallback;

    return defaultLang;
  }

  public async init(): Promise<void> {
    await i18next.use(LanguageDetector).init({
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      resources: {
        fr: {
          translation: fr,
        },
        en: {
          translation: en,
        },
      },
    });
  }
}
