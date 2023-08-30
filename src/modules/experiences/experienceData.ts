import { ExperienceProps } from "../../pages/resume/domainObjects/Experience";

export const experienceData: ExperienceProps[] = [
  {
    id: "1",
    company: "Atos",
    client: {
      abbreviation: "CETE",
      name: "Centre d'Etudes Techniques de l'Equipement",
    },
    name: "Gistrid",
    tag: "Gestion des déchets",
    description: "Système d'information de la gestion des déchets",
    duration: "2014 - 2015",
    place: "Aix-en-Provence / Marseille",
    roleAndResponsibilities: "Développeur",
    technologiesUsed: {
      languages: ["Java", "SQL", "Javascript", "HTML", "CSS"],
      frameworks: ["Spring", "Hibernate"],
      libraries: ["JQuery", "Bootstrap"],
      tools: ["Jenkins", "Maven", "Git", "Jira", "Docker", "SonarQube"],
      architectures: ["SOA"],
    },
    achievementsAndContributions: [
      "Développement de nouvelles fonctionnalités",
      "Correction de bugs",
    ],
    challengesAndSolutions: [
      "Mise en place d'un environnement de développement",
      "Mise en place d'un environnement de test",
      "Mise en place d'un environnement de recette",
      "Mise en place d'un environnement de production",
      "Mise en place d'un environnement de pré-production",
    ],
    collaborationAndTeamwork: ["Travail en équipe", "Travail en mode Kanban"],
    impactAndLessonsLearned: [
      "Amélioration de la qualité du code",
      "Amélioration de la qualité des tests",
      "Amélioration de la qualité des livrables",
      "Amélioration de la qualité des documents",
      "Amélioration de la qualité des processus",
      "Amélioration de la qualité des procédures",
      "Amélioration de la qualité des outils",
      "Amélioration de la qualité des environnements",
      "Amélioration de la qualité des données",
      "Amélioration de la qualité des performances",
      "Amélioration de la qualité de la sécurité",
      "Amélioration de la qualité de l'accessibilité",
    ],
  },
  {
    id: "2",
    company: "Atos",
    tag: "Système d'information de la gestion routière",
    client: {
      abbreviation: "DIR",
      name: "Direction Interdépartementale des Routes",
    },
    name: "TIPI / Bison Futé",
    description:
      "Aggrégation des données de trafic routier en temps réel et prévisionnel.\n" +
      "Diffusion des données de trafic routier en temps réel et prévisionnel.\n",
    duration: "2013 - 2014",
    place: "Bordeaux Pessac",
    roleAndResponsibilities: "Développeur",
    technologiesUsed: {
      languages: ["Java", "SQL", "Javascript", "HTML", "CSS"],
      frameworks: ["Spring", "Hibernate"],
      libraries: ["JQuery", "Bootstrap"],
      tools: ["Jenkins", "Maven", "Git", "Jira", "Docker", "SonarQube"],
      architectures: ["Microservices"],
    },
    achievementsAndContributions: [
      "Développement de nouvelles fonctionnalités",
      "Correction de bugs",
      "Rédaction de tests unitaires",
      "Rédaction de tests d'intégration",
    ],
    challengesAndSolutions: [
      "Mise en place d'un environnement de développement",
      "Mise en place d'un environnement de test",
    ],
    collaborationAndTeamwork: ["Travail en équipe", "Travail en mode Agile"],
    impactAndLessonsLearned: [
      "Amélioration de la qualité du code",
      "Amélioration de la qualité des tests",
      "Amélioration de la qualité des livrables",
      "Amélioration de la qualité des documents",
    ],
  },
];
