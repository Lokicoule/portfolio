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
      "This project aims to simplify the implementation of a secure and scalable authentication system in NestJS applications using Amazon Cognito, an AWS-managed authentication service.",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NestJS"],
      tools: ["GitHub Actions", "Lerna"],
      architectures: ["Multi-Module"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Core Package (@nestjs-cognito/core):",
        features: [
          "Provides a NestJS-friendly interface for integrating Amazon Cognito into NestJS applications.",
          "Offers configuration options for identity provider and JWT verification.",
        ],
      },
      {
        id: "key-features-2",
        key: "Authentication Package (@nestjs-cognito/auth):",
        features: [
          "Builds on top of the core package.",
          "Provides authentication and authorization decorators and guards for NestJS applications using AWS Cognito.",
          "Simplifies the implementation of authentication and authorization rules in Rest endpoints.",
        ],
      },
      {
        id: "key-features-3",
        key: "GraphQL Package (@nestjs-cognito/graphql):",
        features: [
          "Builds on top of the auth package.",
          "Complements the authentication and authorization features for GraphQL-based NestJS applications.",
          "Simplifies the implementation of authentication and authorization rules in GraphQL endpoints.",
        ],
      },
      {
        id: "key-features-4",
        key: "Testing Package (@nestjs-cognito/testing):",
        features: [
          "Facilitates end-to-end and integration testing of authentication and authorization.",
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
      "This project aims to simplify the process of writing commit messages using the Conventional Commits and Red-Green-Refactor conventions.",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NodeJS"],
      tools: ["GitHub Actions"],
      architectures: ["Modular"],
    },
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Wizard-style Commit Message Generation:",
        features: [
          "Commitizard provides an interactive wizard for generating commit messages. This simplifies the process of creating meaningful and well-structured commit messages.",
        ],
      },
      {
        id: "key-features-2",
        key: "Support for Conventional and Red-Green-Refactor Commit Strategies:",
        features: [
          "Commitizard supports two popular commit strategies: conventional commits and red-green-refactor commits. Users can choose the strategy that best fits their project's needs.",
        ],
      },
      {
        id: "key-features-3",
        key: "Fully Configurable through .commitizard.json File:",
        features: [
          "The project's behavior can be customized through a configuration file named .commitizard.json. This allows teams to define commit types, scopes, and templates tailored to their project.",
        ],
      },
      {
        id: "key-features-4",
        key: "Git Hook Management:",
        features: [
          "Commitizard provides tools for managing Git hooks, such as the prepare-commit-msg hook. This ensures that commit messages adhere to the defined commit strategy and template.",
        ],
      },
      {
        id: "key-features-5",
        key: "Application Configuration Management:",
        features: [
          "Users can manage the application's configuration using CLI commands, making it easy to install, backup, restore, or delete configuration files as needed.",
        ],
      },
      {
        id: "key-features-6",
        key: "Interactive Prompts for Commit Details:",
        features: [
          "When creating a commit, Commitizard prompts users for commit details such as type, scope, subject, body, and breaking changes. This ensures that commit messages are comprehensive and consistent.",
        ],
      },
      {
        id: "key-features-7",
        key: "Emoji Support for Commit Message Types:",
        features: [
          "Commitizard allows users to use emojis as prefixes for commit message types, adding a visually appealing and informative element to commit messages.",
        ],
      },
      {
        id: "key-features-8",
        key: "Global and Local Installation Options:",
        features: [
          "Users can install Commitizard either locally in their project or globally, depending on their preferences and workflow requirements.",
        ],
      },
      {
        id: "key-features-9",
        key: "Git Alias Integration:",
        features: [
          "Commitizard can be integrated with Git aliases, making it easy to run the tool using Git commands from any Git directory.",
        ],
      },
      {
        id: "key-features-10",
        key: "Documentation and Examples:",
        features: [
          "The project provides comprehensive documentation and examples to help users understand how to set up, configure, and use Commitizard effectively.",
        ],
      },
      {
        id: "key-features-11",
        key: "Customization of Prompts:",
        features: [
          "Users can customize the prompts displayed by Commitizard to provide more descriptive or project-specific information for commit types and scopes.",
        ],
      },
      {
        id: "key-features-12",
        key: "Custom Commit Message Templates for Red-Green-Refactor Strategy:",
        features: [
          "Commitizard allows users to define custom commit message templates for the red-green-refactor strategy, enabling them to tailor commit messages to their specific project needs.",
        ],
      },
      {
        id: "key-features-13",
        key: "Bypassing Git Hooks with Environment Variable:",
        features: [
          "Users can control when Commitizard's Git hooks are executed by setting the COMMITIZARD_BYPASS environment variable, providing flexibility during development.",
        ],
      },
    ],
    challengesAndSolutions: [],
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
      "This project aims to showcase my skills and experience as a software developer. It also serves as a sandbox for experimenting some architectural patterns with React. You should check it out if you are interested in seeing how I code.",
    technologiesUsed: {
      languages: ["Typescript"],
      libraries: ["React", "TailwindCSS", "@headlessui"],
      tools: ["Vite"],
      architectures: ["MVVM"],
    },
    challengesAndSolutions: [],
    keyFeatures: [
      {
        id: "key-features-1",
        key: "Responsive Design:",
        features: [
          "The portfolio is responsive and can be viewed on different screen sizes.",
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
        features: ["The portfolio supports internationalization."],
      },
      {
        id: "key-features-4",
        key: "SEO:",
        features: ["The portfolio is optimized for search engines."],
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
    description:
      "This project aims to simplify the process of creating and managing Git aliases.",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NodeJS"],
      tools: ["GitHub Actions"],
    },
    keyFeatures: [],
    challengesAndSolutions: [],
  },
];
