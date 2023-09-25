import { WorkProps } from "../WorksViewModel";
import { FaGithub, FaNpm, FaLink } from "react-icons/fa";

// english to french
export const workData: WorkProps[] = [
  {
    id: "work-1",
    name: "@NestJS-Cognito",
    category: "backend",
    socialLinks: [
      {
        icon: <FaNpm />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.npmjs.com/package/@nestjs-cognito/auth",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.github.com/lokicoule/nestjs-cognito",
      },
    ],
    tag: "Open Source",
    description:
      "Ce projet vise à simplifier la mise en œuvre d'un système d'authentification sécurisé et évolutif dans les applications NestJS en utilisant Amazon Cognito, un service d'authentification géré par AWS.\n" +
      "L'idée m'est venue lors du développement d'une application NestJS pour un client. J'ai trouvé que l'intégration d'Amazon Cognito était fastidieuse et mal documentée. J'ai donc décidé de créer un outil pour faciliter cette tâche et le rendre plus accessible à la communauté NestJS.",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NestJS", "Apollo GraphQL"],
      tools: ["GitHub Actions", "Lerna", "AWS Cognito"],
      architectures: ["Multi-Module"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Core Package (@nestjs-cognito/core):",
        features: [
          "Facilite l'intégration d'Amazon Cognito dans les applications NestJS.",
          "Offre des options de configuration pour le fournisseur d'identité et la vérification JWT.",
        ],
      },
      {
        id: "key-features-2",
        key: "Authentication Package (@nestjs-cognito/auth):",
        features: [
          "Utilise le package core.",
          "Ce package permet d'authentifier et d'autoriser les utilisateurs dans les applications NestJS en utilisant AWS Cognito comme fournisseur d'identité.",
        ],
      },
      {
        id: "key-features-3",
        key: "GraphQL Package (@nestjs-cognito/graphql):",
        features: [
          "Utilise le package auth.",
          "Adapte les fonctionnalités d'authentification et d'autorisation aux applications NestJS basées sur GraphQL.",
        ],
      },
      {
        id: "key-features-4",
        key: "Testing Package (@nestjs-cognito/testing):",
        features: [
          "Facilite les tests d'intégrations et end-to-end des applications NestJS utilisant les packages core, auth et graphql.",
        ],
      },
      {
        id: "key-features-5",
        key: "Couverture de test optimale",
        features: [
          "Les packages core, auth et graphql sont testés à hauteur de 95%.",
          "La branch main est protégée par des tests unitaires, d'intégration et end-to-end.",
        ],
      },
    ],
    challengesAndSolutions: [],
  },
  {
    id: "work-2",
    name: "Commitizard",
    category: "tools",
    socialLinks: [
      {
        icon: <FaNpm />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.npmjs.com/package/commitizard",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.github.com/lokicoule/commitizard",
      },
    ],
    tag: "Open Source",
    description:
      "Ce projet vise à simplifier le processus d'écriture des messages de commit en utilisant les conventions dîtes conventionnelles ou red-green-refactor (TDD).\n" +
      "L'idée m'est venue lors de l'application du TDD dans un projet. J'ai trouvé que le processus d'écriture des messages de commit était fastidieux et j'ai donc décidé de créer un outil pour faciliter cette tâche.",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NodeJS"],
      tools: ["GitHub Actions"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Génération de messages de commit en mode assistant:",
        features: [
          "Prend en charge les stratégies de commit conventionnelles et red-green-refactor (TDD).",
          "Entièrement configurable via .commitizard.json.",
          "Gestion des git hooks.",
        ],
      },
      {
        id: "key-features-2",
        key: "Couverture de test maximale",
        features: [
          "La couverture de code est de 100%.",
          "La branch main est protégée par des tests unitaires, d'intégration et end-to-end.",
        ],
      },
    ],
    challengesAndSolutions: [
      "Prise en charge des git hooks.",
      "Contournement des git hooks en utilisant une variable d'environnement",
    ],
  },
  {
    id: "work-3",
    name: "portfolio",
    category: "frontend",
    socialLinks: [
      {
        icon: <FaLink />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.lokicoule.dev",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.github.com/lokicoule/portfolio",
      },
    ],
    tag: "Personal",
    description:
      "Ce projet est mon portfolio personnel. Il a été créé pour présenter mes compétences, mes projets et mes expériences professionnelles.\n" +
      "Le choix de ne pas utiliser NextJS pour ce projet est volontaire. J'ai voulu éviter d'utiliser un framework opinionné pour me laisser plus de liberté dans la conception et l'architecture de mon portfolio.\n" +
      "Il m'a également servi de terrain d'expérimentation pour essayer une approche architecturale différente de celle que j'utilise habituellement.\n" +
      "Il m'a également permi d'expérimenter la mise en place de SEO pour une progressive web app (PWA).",
    technologiesUsed: {
      languages: ["Typescript"],
      libraries: ["React", "TailwindCSS", "@headlessui"],
      tools: ["Vite"],
      architectures: ["MVVM"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Responsive Design:",
        features: [
          "Le portfolio est conçu pour être responsive et s'adapter à tous les types d'appareils.",
        ],
      },
      {
        id: "key-features-2",
        key: "Dark Mode:",
        features: ["Le portfolio supporte le mode sombre."],
      },
      {
        id: "key-features-3",
        key: "Internationalization:",
        features: ["Le portfolio est disponible en français et en anglais."],
      },
      {
        id: "key-features-4",
        key: "SEO:",
        features: ["Le portfolio est optimisé pour les moteurs de recherche."],
      },
    ],
  },
  {
    id: "work-4",
    name: "commandzen",
    category: "tools",
    socialLinks: [
      {
        icon: <FaNpm />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.npmjs.com/package/commandzen",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.github.com/lokicoule/commandzen",
      },
    ],
    tag: "Open Source",
    description: `Commandzen est une bibliothèque qui vise à simplifier la création d'applications d'interface en ligne de commande (CLI) en utilisant TypeScript et NodeJS.
Lors du développement de Commitizard, j'ai préalablement utilisé la bibliothèque Commander mais la taille du bundle généré était trop importante pour mon cas d'utilisation. J'ai donc décidé de créer ma propre bibliothèque pour répondre à mes besoins.`,
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NodeJS"],
      tools: ["GitHub Actions"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "API simple et intuitive pour la création d'applications CLI",
        features: [
          "Supporte les commandes, les sous-commandes et les options",
          "Supporte les alias de commandes",
          "Génération automatique de l'aide pour les commandes et sous-commandes",
        ],
      },
      {
        id: "key-features-2",
        key: "Compatibilité avec les systèmes de modules JavaScript",
        features: ["CommonJS", "ECMAScript Modules (ESM)"],
      },
      {
        id: "key-features-4",
        key: "Couverture de test maximale",
        features: [
          "La couverture de code est de 100%.",
          "La branch main est protégée par des tests unitaires, d'intégration et end-to-end.",
        ],
      },
    ],
    challengesAndSolutions: [
      "Gérer la compatibilité entre les systèmes de modules CommonJS et ECMAScript Modules (ESM).",
    ],
  },
  {
    id: "work-5",
    name: "nestjs-graphql-boilerplate",
    category: "backend",
    socialLinks: [
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.github.com/lokicoule/nestjs-graphql-boilerplate",
      },
    ],
    tag: "R&D",
    description:
      "Ce projet m'a servi de terrain d'expérimentation pour tester une approche d'architecture micro-service avec NestJS et GraphQL.\n" +
      "Il m'a servi de base pour le développement d'une application client.",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NestJS", "Apollo GraphQL"],
      libraries: ["NestJS Cognito"],
      architectures: ["Microservices", "Layered Architecture"],
    },
  },
  {
    id: "work-6",
    name: "sort-viewer",
    category: "frontend",
    socialLinks: [
      {
        icon: <FaLink />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://lokicoule.github.io/Sort-Viewer/",
      },
      {
        icon: <FaGithub />,
        iconClassName: "text-[#0072b1] bg-secondary",
        href: "https://www.github.com/lokicoule/Sort-Viewer",
      },
    ],
    tag: "Learning",
    description:
      `Ce projet est une SPA qui permet de visualiser les algorithmes de tri en action.\n` +
      "Ce projet m'a permis de mettre un premier pied dans le monde de la visualisation d'algorithmes et de découvrir les bases de React et de Redux.",
    technologiesUsed: {
      languages: ["Javascript"],
      libraries: ["React", "Material-UI", "Redux", "Redux Toolkit"],
      tools: ["Create React App"],
    },
  },
];
