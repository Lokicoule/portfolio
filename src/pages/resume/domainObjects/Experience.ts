interface Stack {
  languages?: string[];
  frameworks?: string[];
  libraries?: string[];
  tools?: string[];
  architectures?: string[];
  databases?: string[];
}

interface Client {
  abbreviation: string;
  name: string;
}

export interface ExperienceProps {
  id: string;
  name: string;
  tag: string;
  description: string;
  company: string;
  client: Client;
  duration: string;
  place: string;
  roleAndResponsibilities: string;
  technologiesUsed: Stack;
  achievementsAndContributions: string[];
  challengesAndSolutions: string[];
  collaborationAndTeamwork: string[];
  impactAndLessonsLearned: string[];
  link?: string;
  linkText?: string;
}
export class Experience {
  constructor(private readonly props: ExperienceProps) {}

  public get attributes() {
    return this.props;
  }
}
