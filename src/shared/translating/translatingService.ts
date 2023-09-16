import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import DOMPurify from "dompurify";

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
            about: {
              description:
                "I am a software engineer with a strong interest in software architecture and design. I am passionate about the Web and everything related to it. I am also interested in the <span class='underline'>Web 3.0</span> and the <span class='underline'>decentralized web</span>. I am always looking for new challenges and opportunities to learn new things.",
            },
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
            about: {
              description:
                "Je suis un ingénieur logiciel avec un vif intérêt pour l'architecture logicielle et la conception. Je suis passionné par le Web et tout ce qui s'y rapporte. Je m'intéresse également au <span class='underline'>Web 3.0</span> et au web décentralisé. Je suis toujours à la recherche de nouveaux défis et d'opportunités pour apprendre de nouvelles choses.",
            },
          },
        },
      },
    });
  }
}
