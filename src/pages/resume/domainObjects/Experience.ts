interface Stack {
  languages: string[];
  frameworks: string[];
  libraries: string[];
  tools: string[];
}

export interface ExperienceProps {
  id: string;
  name: string;
  company: string;
  client: string;
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
