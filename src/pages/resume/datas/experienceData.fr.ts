import { ExperienceProps } from "../ResumeViewModel";

export const experienceData: ExperienceProps[] = [
  {
    id: "experience-1",
    name: "Freelance",

    tag: "Développement d'applications web",
    description:
      "Pendant cette période, j'ai pris une pause temporaire du travail formel pour me consacrer à l'amélioration de mes compétences et à la recherche en profondeur dans le domaine du développement d'applications web",
    duration: "2020 - Présent",
    place: "Remote",
    roleAndResponsibilities: "Développeur fullstack",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["React", "Next.js", "Node.js", "NestJS"],
      tools: ["Git", "Docker", "SonarQube"],
      databases: ["MongoDB", "PostgreSQL"],
      architectures: ["Microservices", "Micro-frontend", "MVC", "MVVM", "CQRS"],
    },
    achievementsAndContributions: [
      "Auto-apprentissage intensif: J'ai consacré un temps considérable à l'auto-apprentissage de nouvelles technologies, de frameworks et de langages de programmation pertinents pour mon domaine",
      "Exploration des tendances actuelles: J'ai suivi de près les tendances et les évolutions du développement web, en me tenant au courant des dernières avancées technologiques",
      "Développement de concepts: J'ai travaillé sur des concepts et des idées de projets personnels, même si je n'ai pas abouti à des réalisations finales",
    ],
    challengesAndSolutions: [],
    collaborationAndTeamwork: [],
    impactAndLessonsLearned: [
      "Solide compréhension des dernières technologies web",
      "Capacité à apprendre de manière autonome et à s'adapter rapidement aux nouvelles tendances",
      "Forte curiosité intellectuelle et engagement envers l'exploration continue de mon domaine",
      "Prêt à relever de nouveaux défis et à appliquer les connaissances acquises dans des projets futurs",
    ],
  },
  {
    id: "experience-2",
    company: "Atos",
    client: {
      abbreviation: "MTES",
      name: "Ministère de la Transition Écologique et Solidaire (EIR)",
    },
    name: "TIPI / BisonFuté",
    tag: "Système d'information routier national",
    description:
      "Le système d'information TIPI agit comme une plateforme d'agrégation de données routières. Il rassemble en temps réel les informations du réseau routier national provenant de divers gestionnaires de routes. Ces données centralisées dans la base TIPI sont ensuite consultables par les utilisateurs via les applications grand public de Bison Futé",
    duration: "2019 - 2020",
    place: "Pessac, France (33)",
    roleAndResponsibilities: "Ingénieur logiciel",
    technologiesUsed: {
      languages: ["Java", "Javascript", "Typescript"],
      frameworks: ["Spring", "Spring AOP", "Hibernate", "ExtJS", "Angular"],
      libraries: ["RxJS"],
      tools: [
        "Jenkins",
        "Maven",
        "Git",
        "Jira",
        "Mantis",
        "Docker",
        "SonarQube",
        "Apache Karaf",
      ],
      databases: ["PostgreSQL"],
      architectures: ["Microservices", "MVC", "Architecture en couches"],
    },
    achievementsAndContributions: [
      "Conçu et développé des solutions pour répondre aux besoins critiques, améliorant ainsi la fonctionnalité du projet",
      "Démontré une expertise technique en mettant à niveau le framework d'événements Tipi pour le conformer aux normes ministérielles",
      "Collaboré étroitement avec les membres de l'équipe, offrant des conseils et du soutien à ceux ayant besoin d'aide avec les pratiques GIT",
      "Pris l'initiative de fournir un accompagnement individuel, aidant les membres de l'équipe à comprendre et à mettre en œuvre efficacement les procédures GIT appropriées",
      "Augmenté la couverture des tests unitaires, améliorant la fiabilité de l'application",
      "Rehaussé la qualité globale des livrables, ce qui s'est traduit par une satisfaction accrue des clients",
      "Migration de Java 8 à Java 10",
      "Migration de Spring 4 à Spring 5",
      "Mise en place d'une architecture en couche pour les nouveaux services qui utilise l'AOP (Aspect Oriented Programming) pour la gestion des transactions et des logs. Cela n'avait pas encore été fait au sein du SI",
    ],
    challengesAndSolutions: [
      "Polyvalent et adaptable, j'ai pu rapidement comprendre et contribuer à un projet de grande complexité de part ses années et le nombre d'applications qui le compose",
      "Le domaine métier était vaste, ce qui m'a demandé de faire preuve de curiosité et d'investissement pour comprendre les enjeux et les besoins des utilisateurs",
      "Les exigences métier étaient souvent vagues et ambiguës, ce qui m'a amené à rechercher des éclaircissements et des conseils de l'équipe fonctionnelle",
      "La partie événementielle du projet était compliquée à déployer en local, c'est pour quoi j'ai containerisé le service évenementiel (servicemix) du projet afin d'être capable de déployer les développements en local avant le déploiement sur l'environnement de recette",
    ],
    collaborationAndTeamwork: [
      "Équipe TIPI de 2 à 4 personnes",
      "Équipe BisonFuté de 1 à 2 personnes",
      "Équipe EIR de 12 à 15 personnes",
      "Méthodologie Agile (Scrum)",
    ],
    impactAndLessonsLearned: [
      "Acquis des connaissances sur les défis potentiels de la monotonie et de l'ennui, ce qui m'a incité à rechercher des projets diversifiés et captivants",
      "Réelle prise de conscience de l'obsolesence du métier d'ingénieur logiciel, et de la nécessité de se tenir à jour des dernières technologies",
    ],
  },
  {
    id: "experience-3",
    company: "Atos",
    tag: "Gestion par internet du suivi des transferts internationaux de déchets",
    client: {
      abbreviation: "MTES",
      name: "Ministère de la Transition Écologique et Solidaire (DOSO)",
    },
    name: "GISTRID",
    description:
      "GISTRID modernise les transferts transfrontaliers de déchets grâce à une dématérialisation novatrice. Cette plateforme en ligne simplifie les demandes de transfert pour les notifiants (importateurs/exportateurs de déchets) tout en assurant un suivi réglementaire transparent par les services ministériels. GISTRID favorise une gestion environnementale responsable et efficace",
    duration: "2017 - 2019",
    place: "Aix-en-Provence, France (13)",
    roleAndResponsibilities: "Responsable applicatif / Ingénieur logiciel",
    technologiesUsed: {
      languages: ["Java", "Javascript"],
      frameworks: ["Spring", "Hibernate", "Struts"],
      libraries: ["AspectJ", "JasperReports"],
      tools: ["Jenkins", "Maven", "Git", "Jira"],
      architectures: ["Layered Architecture", "monolithique"],
    },
    achievementsAndContributions: [
      "Développement de nouvelles fonctionnalités",
      "Correction de bugs",
      "Rédaction de tests unitaires",
      "Rédaction de tests d'intégration",
      "Étude d'impact",
      "Étude de migration",
      "Migration de Spring 3 à Spring 4",
      "Migration de Struts 2.3 à Struts 2.5",
      "Migration de Java 6 à Java 8",
    ],
    challengesAndSolutions: [
      "Effectuer des migrations technologiques complexes, notamment de Struts 2.3 à Struts 2.5 et de Spring 3 à Spring 4. Pour cela, j'ai élaboré des plans de migration détaillés, mené des tests approfondis et collaboré avec l'équipe pour minimiser les interruptions de service pendant les transitions",
      "Intégrateur backup, j'ai dû me perfectionner sur Git et Maven en un temps record pour pouvoir assurer la continuité des différents projets relatif au DOSO.",
    ],
    collaborationAndTeamwork: [
      "Équipe Gistrid composée de 2 à 4 personnes",
      "Équipe DOSO composée de 10 à 12 personnes",
      "Méthodologie Kanban, j'ai fait ce choix pour le côté plus flexible, ludique et moins rigide qu'offre cette méthodologie",
    ],
    impactAndLessonsLearned: [
      "Mon expérience en tant que responsable applicatif m'a confronté au défi de gérer une équipe de développeurs composée de 2 à 3 personnes (moi y compris), j'ai réalisé que la gestion d'équipe ne correspondait pas à mes aspirations professionnelles.\n" +
        "Ce défi m'a permis de mieux comprendre mes préférences et de reconnaître que mon expertise et mon enthousiasme se situent davantage dans le développement technique et la résolution de problèmes",
      "Dans le cadre de mes responsabilités, j'ai également développé un sens accru de la rigueur et de l'exigence envers moi-même et les autres, ce qui s'est avéré être à la fois un atout et un défi au quotidien",
      "Ma collaboration ponctuelle avec une architecte logicielle interne au groupe Atos m'a offert l'opportunité d'apprendre à gérer efficacement les migrations technologiques complexes.\n" +
        "Cette expérience m'a permis d'appréhender les défis et les risques associés à ces migrations, et elle a été déterminante pour développer des stratégies de gestion efficace dans ce domaine, renforçant ainsi mon expertise",
    ],
  },
  {
    id: "experience-4",
    company: "Atos",
    tag: "Transformation digitale de gestion de la maintenance",
    client: {
      name: "Dassault Falcon Service",
    },
    name: "FalconTab",
    description: `Falcontab, développé par la branche de l'aviation civile de Dassault, s'engage à réduire la consommation de papier tout en contribuant à la réduction des déchets grâce à la dématérialisation.\n
Cette solution de gestion de la maintenance a été conçue spécifiquement pour les avions Falcon, offrant une transition vers le tout numérique. Elle permet une gestion complète des tâches de maintenance, des pièces de rechange, des outils et de l'équipement, ainsi que des documents techniques essentiels. De plus, elle facilite la gestion des demandes de maintenance et des demandes de réparation.\n
En somme, Falcontab représente une minuscule avancée vers une maintenance aérienne plus efficiente et écoresponsable, tout en réduisant notre empreinte environnementale.`,
    duration: "2015 - 2017",
    place: "Aix-en-Provence, France (13)",
    roleAndResponsibilities: "Développeur fullstack",
    technologiesUsed: {
      languages: ["Java", "C#", "Typescript"],
      libraries: ["Aspose"],
      frameworks: ["Angular", "SharePoint"],
      tools: [
        "Apache ActiveMQ",
        "Talend ESB",
        "Jenkins",
        "Maven",
        "SVN",
        "Jira",
        "Docker",
        "SonarQube",
      ],
      databases: ["SQL Server", "SAP"],
      architectures: ["SOA", "ESB", "MVVM"],
    },
    achievementsAndContributions: [
      "Développement de l'orchestrateur (ESB) en collaboration de deux autres développeurs",
      "Développement de services SOAP qui servent d'interface entre SAP, l'orchestrateur et les applications web et tablette",
      "Développer un bridge JNDI (Java) pour interphaser une application C++ et une application C#",
    ],
    challengesAndSolutions: [
      "Étant de nature timide, m'intégrer dans une équipe de 12 à 15 personnes a été un défi pour moi. J'ai dû sortir de ma zone de confort et faire preuve d'ouverture et de curiosité pour m'intégrer à l'équipe",
      "Apprendre à utiliser Talend ESB, un outil que je ne connaissais pas, et qui est un outil complexe. Il nécessite une bonne compréhension du besoin fonctionnel et une bonne capacité d'abstraction",
    ],
    collaborationAndTeamwork: [
      "Équipe de 12 à 15 personnes",
      "Méthodologie Agile (Scrum)",
    ],
    impactAndLessonsLearned: [
      "J'ai vraiment compris l'importance des designs patterns et de l'architecture logicielle, et j'ai pu les mettre en pratique dans le cadre de ce projet",
      "À travers le bridge JNDI j'ai pu également comprendre l'importance des problématiques d'interopérabilité",
      "Talend ESB qui se veut être un outil low-code m'a permis de rapidement comprendre les limites de ce type d'outils, et m'a permis de confirmer mon intérêt pour le développement logiciel",
    ],
  },
];
