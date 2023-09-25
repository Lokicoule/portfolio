import { ExperienceProps } from "../ResumeViewModel";

export const experienceData: ExperienceProps[] = [
  {
    id: "experience-1",
    company: "Atos",
    client: {
      abbreviation: "MTES",
      name: "French Ministry of Ecological and Solidarity Transition",
    },
    name: "TIPI / BisonFuté",
    tag: "National Road Information System",
    description:
      "The TIPI information system acts as an aggregation platform for road data. It real-time gathers information from the national road network from various road managers. This centralized data in the TIPI database is then accessible to users through the public application Bison Futé.",
    duration: "2019 - 2020",
    place: "Pessac, France (33)",
    roleAndResponsibilities: "Software Engineer",
    technologiesUsed: {
      languages: ["Java", "Javascript", "Typescript"],
      frameworks: ["Spring", "Hibernate", "ExtJS", "Angular"],
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
      architectures: ["Microservices", "MVC", "Layered Architecture", "MVVM"],
    },
    keyAchievements: [
      "Designed and developed solutions to address critical needs, enhancing the project's functionality.",
      "Demonstrated technical expertise by upgrading the Tipi event framework to align with ministry standards.",
      "Collaborated closely with fellow team members, offering guidance and support to those in need of assistance with GIT practices.",
      "Took the initiative to provide one-on-one guidance, helping team members understand and implement proper GIT procedures effectively.",
      "Played an active role in promoting a culture of effective GIT usage within the team, fostering smoother collaboration and code management.",
      "Increased unit test coverage, enhancing the reliability of the application.",
      "Elevated code quality through continuous improvements, leading to a more maintainable codebase.",
      "Elevated the overall quality of deliverables, resulting in more reliable project outcomes.",
    ],
    personalExperience: [
      "Versatile and adaptable, I was able to quickly understand and contribute to a complex legacy project with numerous applications.",
      "Business domain was broad, requiring me to learn about a wide range of topics.",
      "Business requirements were often vague and ambiguous, requiring me to seek clarification and guidance from the functional team.",
    ],
  },
  {
    id: "experience-2",
    company: "Atos",
    tag: "Internet-based Management of International Waste Transfers",
    client: {
      abbreviation: "MTES",
      name: "French Ministry of Ecological and Solidarity Transition",
    },
    name: "GISTRID",
    description:
      "GISTRID modernizes cross-border waste transfers through innovative digitization. This online platform simplifies transfer requests for notifiers (waste importers/exporters) while ensuring transparent regulatory tracking by ministry services. GISTRID promotes responsible and efficient environmental management.",
    duration: "2017 - 2019",
    place: "Aix-en-Provence, France (13)",
    roleAndResponsibilities: "Application Manager / Software Engineer",
    technologiesUsed: {
      languages: ["Java", "Javascript"],
      frameworks: ["Spring", "Hibernate", "Struts"],
      libraries: ["AspectJ", "Cerbère", "JasperReports"],
      tools: ["Jenkins", "Maven", "Git", "Jira"],
      architectures: ["Layered Architecture", "monolithic"],
    },
    keyAchievements: [
      "Development of new features",
      "Bug fixes",
      "Creation of unit tests",
      "Creation of integration tests",
      "Impact study",
      "Migration study",
      "Creation of design documents",
      "Creation of specification documents",
      "Creation of migration documents",
    ],
    personalExperience: [
      "Challenge: Managing a team of 3 developers while effectively coordinating tasks and maintaining smooth communication.\nSolution: I implemented weekly meetings, used the Kanban methodology to track tasks, and resolved issues collaboratively.",
      "Challenge: Performing complex technology migrations, including from Struts 2.3 to Struts 2.5 and from Spring 3 to Spring 4.\nSolution: I devised detailed migration plans, conducted thorough testing, and collaborated with the team to minimize service interruptions during transitions.",
      "Challenge: Ensuring seamless integration with GIT, managing branches, and effectively resolving conflicts.\nSolution: I established robust code management practices and followed best practices to ensure a smooth GIT workflow.",
    ],
  },
  {
    id: "experience-3",
    company: "Atos",
    tag: "Dassault Aviation's Falcon aircraft maintenance management system",
    client: {
      name: "Dassault Falcon Service",
    },
    name: "FALCONTAB",
    description:
      "Aggregation of real-time and forecast road traffic data.\n" +
      "Dissemination of real-time and forecast road traffic data.\n",
    duration: "2015 - 2017",
    place: "Aix-en-Provence, France (13)",
    roleAndResponsibilities: "Backend Developer",
    technologiesUsed: {
      languages: ["Java", "C#"],
      libraries: ["Aspose"],
      frameworks: ["Angular", "SharePoint"],
      tools: [
        "Talend ESB",
        "Jenkins",
        "Maven",
        "SVN",
        "Jira",
        "Docker",
        "SonarQube",
      ],
      databases: ["Oracle", "SQL Server"],
      architectures: ["SOA", "Microservices", "ESB"],
    },
    keyAchievements: [
      "Development of new features",
      "Bug fixes",
      "Creation of unit tests",
      "Creation of integration tests",
    ],
    personalExperience: [
      "Establishment of a development environment",
      "Establishment of a testing environment",
    ],
  },
];
