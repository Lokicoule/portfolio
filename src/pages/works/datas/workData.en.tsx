import { WorkProps } from "../WorksViewModel";
import { FaGithub, FaNpm, FaLink } from "react-icons/fa";

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
      "This project aims to simplify the implementation of a secure and scalable authentication system in NestJS applications using Amazon Cognito, an authentication service managed by AWS.\n" +
      "The idea came to me while developing a NestJS application for a client. I found that integrating Amazon Cognito was tedious and poorly documented. So I decided to create a tool to facilitate this task and make it more accessible to the NestJS community.",
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
          "Facilitates the integration of Amazon Cognito into NestJS applications.",
          "Offers configuration options for the identity provider and JWT verification.",
        ],
      },
      {
        id: "key-features-2",
        key: "Authentication Package (@nestjs-cognito/auth):",
        features: [
          "Uses the core package.",
          "This package allows users to authenticate and authorize in NestJS applications using AWS Cognito as the identity provider.",
        ],
      },
      {
        id: "key-features-3",
        key: "GraphQL Package (@nestjs-cognito/graphql):",
        features: [
          "Uses the auth package.",
          "Adapts authentication and authorization features to NestJS-based GraphQL applications.",
        ],
      },
      {
        id: "key-features-4",
        key: "Testing Package (@nestjs-cognito/testing):",
        features: [
          "Uses the core package.",
          "Facilitates integration and end-to-end testing of NestJS applications using the auth and graphql packages.",
        ],
      },
      {
        id: "key-features-5",
        key: "Optimal test coverage",
        features: [
          "The core, auth, and graphql packages are tested up to 95%.",
          "The main branch is protected by unit, integration, and end-to-end tests.",
        ],
      },
    ],
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
      "This project aims to simplify the commit message writing process using conventional or red-green-refactor (TDD) conventions.\n" +
      "The idea came to me while applying TDD in a project. I found that the commit message writing process was tedious, so I decided to create a tool to facilitate this task.",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NodeJS"],
      tools: ["GitHub Actions"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Commit message generation in assistant mode:",
        features: [
          "Supports conventional and red-green-refactor (TDD) commit strategies.",
          "Fully configurable via .commitizard.json.",
          "Git hooks management.",
        ],
      },
      {
        id: "key-features-2",
        key: "Maximum test coverage",
        features: [
          "Code coverage is 100%.",
          "The main branch is protected by unit, integration, and end-to-end tests.",
        ],
      },
    ],
  },
  {
    id: "work-3",
    name: "Portfolio",
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
      "This portfolio was created to showcase my skills, projects, and professional experiences. I deliberately chose not to use NextJS to benefit from greater design and architecture freedom.",
    technologiesUsed: {
      languages: ["Typescript"],
      libraries: ["React", "TailwindCSS", "@headlessui"],
      tools: ["Vite"],
      architectures: ["MVVM", "PubSub"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Responsive Design:",
        features: [
          "The portfolio is designed to be responsive and adapt to all types of devices.",
        ],
      },
      {
        id: "key-features-2",
        key: "Dark Mode:",
        features: ["The portfolio supports dark mode."],
      },
      {
        id: "key-features-3",
        key: "Internationalization:",
        features: ["The portfolio is available in French and English."],
      },
      {
        id: "key-features-4",
        key: "SEO:",
        features: ["The portfolio is optimized for search engines."],
      },
      {
        id: "key-features-5",
        key: "Global State:",
        features: [
          "The portfolio uses a state management system based on the PubSub pattern.",
        ],
      },
    ],
  },
  {
    id: "work-4",
    name: "Commandzen",
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
    description: `Commandzen is a library that aims to simplify the creation of command-line interface (CLI) applications using TypeScript and NodeJS.
When developing Commitizard, I previously used the Commander library, but the size of the generated bundle was too large for my use case. So I decided to create my own library to meet my needs.`,
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NodeJS"],
      tools: ["GitHub Actions"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Simple and intuitive API for creating CLI applications",
        features: [
          "Supports commands, subcommands, and options",
          "Supports command aliases",
          "Automatic generation of help for commands and subcommands",
        ],
      },
      {
        id: "key-features-2",
        key: "Compatibility with JavaScript module systems",
        features: ["CommonJS", "ECMAScript Modules (ESM)"],
      },
      {
        id: "key-features-4",
        key: "Maximum test coverage",
        features: [
          "Code coverage is 100%.",
          "The main branch is protected by unit, integration, and end-to-end tests.",
        ],
      },
    ],
  },
];
