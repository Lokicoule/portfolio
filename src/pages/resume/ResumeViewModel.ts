import { Education } from "./domainObjects/Education";
import { Experience } from "./domainObjects/Experience";

export interface ResumeViewModelProps {
  experiences: Experience[];
  educations: Education[];
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

  public get educations() {
    return this.props.educations;
  }

  public get lineItems() {
    return this.props.lineItems;
  }

  public get attributes() {
    return this.props;
  }
}
