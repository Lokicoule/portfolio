import { SocialLinkProps } from "../../shared/components/social-links/SocialLinks";
import { StackProps } from "../../shared/components/stack/Stack";

type KeyFeaturesProps = {
  id: string;
  key: string;
  features: string[];
};

export interface WorkProps {
  id: string;
  name: string;
  tag: string;
  description: string;
  logo?: JSX.Element;
  technologiesUsed: StackProps;
  challengesAndSolutions: string[];
  keyFeatures?: KeyFeaturesProps[];
  socialLinks: SocialLinkProps[];
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
