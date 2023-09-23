import { SocialLinkProps } from "../../shared/components/social-links/SocialLinks";
import { StackProps } from "../../shared/components/stack/Stack";
import { WorkFilter } from "../../sharedKernel/persistence/GlobalCache";

type KeyFeaturesProps = {
  id: string;
  key: string;
  features: string[];
};

export interface WorkProps {
  id: string;
  name: string;
  category: WorkFilter;
  tag: string;
  description: string;
  logo?: JSX.Element;
  technologiesUsed: StackProps;
  challengesAndSolutions?: string[];
  keyFeatures?: KeyFeaturesProps[];
  socialLinks: SocialLinkProps[];
}

export interface WorksViewModelProps {
  works: WorkProps[];
  filter?: string;
}

export class WorksViewModel {
  constructor(private readonly props: WorksViewModelProps) {}

  public get works() {
    return this.props.filter === "all"
      ? this.props.works
      : this.props.works.filter((work) => work.category === this.props.filter);
  }

  public get filter() {
    return this.props.filter;
  }

  public get attributes() {
    return this.props;
  }
}
