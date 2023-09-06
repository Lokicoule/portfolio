interface Stack {
  languages?: string[];
  frameworks?: string[];
  libraries?: string[];
  tools?: string[];
  architectures?: string[];
  databases?: string[];
}

interface Client {
  abbreviation?: string;
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

export type EducationProps = {
  id: string;
  date: string;
  title: string;
  level?: string;
  link?: string;
};

export type SkillProps = {
  id: string;
  name: string;
  value: number;
};

export type KnowledgeProps = {
  id: string;
  name: string;
  abbreviation?: string;
};

export interface ResumeViewModelProps {
  experiences: ExperienceProps[];
  educations: EducationProps[];
  skills: SkillProps[];
  knowledges: KnowledgeProps[];
}

export class ResumeViewModel {
  constructor(private readonly props: ResumeViewModelProps) {}

  public get experiences() {
    return this.props.experiences;
  }

  public get educations() {
    return this.props.educations;
  }

  public get skills() {
    return this.props.skills;
  }

  public get knowledges() {
    return this.props.knowledges;
  }

  public get attributes() {
    return this.props;
  }
}
