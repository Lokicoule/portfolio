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
                "I am a software engineer with a strong interest in software architecture and design. I am passionate about the Web and everything related to it. I am also interested in the <span class='gradient-underline-animation'>Web 3.0</span> and the <span class='gradient-underline-animation'>decentralized web</span>. I am always looking for new challenges and opportunities to learn new things.",
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
              description: `
              Salut à tous ! Je suis Loïk, un <span class="gradient-underline-fixed-xs">développeur fullstack</span> passionné par la technologie et l'environnement. Depuis le début de ma carrière, mon engagement pour la cause environnementale a guidé mes choix de projets, avec une expérience significative dans des projets axés sur la <span class="gradient-hightlight">dématérialisation</span>. Je suis également fasciné par la blockchain et les opportunités de liberté et de transparence qu'elle offre.
              <br /><br />
              C'est tout naturellement que je recherche une opportunité dans une entreprise partageant mes valeurs environnementales et de <span class="gradient-hightlight">décentralisation</span>, axée sur l'innovation et la collaboration.
              `,
            },
          },
        },
      },
    });
  }
}
