import { Experience } from "./Experience";

export interface ResumeViewModelProps {
  experiences: Experience[];
  educationItems: {
    id: number;
    date: string;
    title: string;
    level?: string;
    link: string;
    bg: string;
  }[];
  lineItems: {
    id: string;
    color: string;
    name: string;
    number: number;
  }[];
}

export class ResumeViewModel {
  constructor(private readonly props: ResumeViewModelProps) {}

  public get experiences() {
    return this.props.experiences;
  }

  public get educationItems() {
    return this.props.educationItems;
  }

  public get lineItems() {
    return this.props.lineItems;
  }

  public get attributes() {
    return this.props;
  }
}
