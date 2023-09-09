import { WorkProps } from "../WorksViewModel";

export const workData: WorkProps[] = [
  {
    id: "work-1",
    name: "@NestJS-Cognito",
    tag: "Open Source Project",
    description:
      "A NestJS module that provides a simple way to integrate with AWS Cognito.",
    technologiesUsed: {
      languages: ["Typescript"],
      frameworks: ["NestJS"],
      tools: ["GitHub Actions", "Lerna"],
      architectures: ["Multi-Module"],
    },
    challengesAndSolutions: [
      "Versatile and adaptable, I was able to quickly understand and contribute to a complex legacy project with numerous applications.",
      "Business domain was broad, requiring me to learn about a wide range of topics.",
      "Business requirements were often vague and ambiguous, requiring me to seek clarification and guidance from the functional team.",
    ],
    link: {
      npm: "https://www.npmjs.com/package/@nestjs-cognito/auth",
      github: "https://www.github.com/lokicoule/nestjs-cognito",
    },
  },
];
