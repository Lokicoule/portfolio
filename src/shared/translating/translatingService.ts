import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export class TranslatingService {
  public translate(key: string): string {
    console.log(i18next.language);
    return i18next.t(key);
  }

  public setLanguage(language: string): void {
    if (language === "fr" || language === "en")
      i18next.changeLanguage(language);
  }

  public get language(): string {
    if (i18next.language === "fr" || i18next.language === "en")
      return i18next.language;
    return "en";
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
            company: "Company",
            client: "Client",
            name: "Name",
            tag: "Tag",
            description: "Description",
            duration: "Duration",
            place: "Place",
            roleAndResponsibilities: "Role and Responsibilities",
            technologiesUsed: "Stack",
            achievementsAndContributions: "Achievements and Contributions",
            challengesAndSolutions: "Challenges and Solutions",
            collaborationAndTeamwork: "Collaboration and Teamwork",
            impactAndLessonsLearned: "Impact and Lessons Learned",
          },
        },
        fr: {
          translation: {
            pageNotFound: "la page que vous recherchez n'existe pas",
            backToHome: "Retour à la page d'accueil",
            company: "Entreprise",
            client: "Client",
            name: "Nom",
            tag: "Tag",
            description: "Description",
            duration: "Durée",
            place: "Lieu",
            roleAndResponsibilities: "Rôle et Responsabilités",
            technologiesUsed: "Stack",
            achievementsAndContributions: "Réalisations et Contributions",
            challengesAndSolutions: "Défis et Solutions",
            collaborationAndTeamwork: "Collaboration et Travail d'Équipe",
            impactAndLessonsLearned: "Impact et Leçons Apprises",
          },
        },
      },
    });
  }
}
