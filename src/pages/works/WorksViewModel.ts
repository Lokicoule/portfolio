export interface StackProps {
  languages?: string[];
  frameworks?: string[];
  libraries?: string[];
  tools?: string[];
  architectures?: string[];
  databases?: string[];
}

type LinkProps = {
  npm?: string;
  github?: string;
};

export interface WorkProps {
  id: string;
  name: string;
  tag: string;
  description: string;
  technologiesUsed: StackProps;
  challengesAndSolutions: string[];
  link: LinkProps;
}

export interface WorksViewModelProps {
  works: WorkProps[];
}

export class WorksViewModel {
  constructor(private readonly props: WorksViewModelProps) {}

  public get works() {
    return this.props.works;
  }
}
