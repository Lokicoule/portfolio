import { WorkProps } from "../WorksViewModel";
import { FaGithub, FaNpm } from "react-icons/fa";

export const workData: WorkProps[] = [
  {
    id: "work-1",
    name: "@NestJS-Cognito",
    socialLinks: [
      {
        icon: <FaNpm />,
        iconClass: "text-[#0072b1]",
        href: "https://www.npmjs.com/package/@nestjs-cognito/auth",
      },
      {
        icon: <FaGithub />,
        iconClass: "text-[#0072b1]",
        href: "https://www.github.com/lokicoule/nestjs-cognito",
      },
    ],
    tag: "Open Source Project",
    description:
      "This project aims to simplify the implementation of a secure and scalable authentication system in NestJS applications using Amazon Cognito, a managed authentication service from AWS.",
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
          "Simplifies API requests to Amazon Cognito and JWT token verification.",
          "Offers configuration options for identity provider and JWT verification.",
        ],
      },
      {
        id: "key-features-2",
        key: "Authentication Package (@nestjs-cognito/auth):",
        features: [
          "Builds on top of the core package.",
          "Provides authentication and authorization decorators and guards for NestJS applications using AWS Cognito.",
          "Offers decorators like @Authentication, @Authorization, and @CognitoUser for controlling access to routes and extracting user information.",
        ],
      },
      {
        id: "key-features-3",
        key: "GraphQL Package (@nestjs-cognito/graphql):",
        features: [
          "Complements the authentication and authorization features for GraphQL-based NestJS applications.",
          "Provides middleware, guards, and decorators for handling Cognito authentication and authorization in GraphQL resolvers.",
          "Simplifies the implementation of authentication and authorization rules in GraphQL endpoints.",
        ],
      },
      {
        id: "key-features-4",
        key: "Testing Package (@nestjs-cognito/testing):",
        features: [
          "Facilitates end-to-end and integration testing of authentication and authorization code based on Amazon Cognito.",
          "Includes a controller and service for obtaining access tokens using test user credentials.",
        ],
      },
    ],
    challengesAndSolutions: [],
  },
  {
    id: "work-2",
    name: "Commitizard",
    socialLinks: [
      {
        icon: <FaGithub />,
        iconClass: "text-[#0072b1]",
        href: "https://www.github.com/lokicoule/commitizard",
      },
    ],
    tag: "Open Source Project",
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
];
