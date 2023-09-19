import { SocialLinkProps } from "../../shared/components/social-links/SocialLinks";
import { StackProps } from "../../shared/components/stack/Stack";

type Category =
  | "frontend"
  | "backend"
  | "fullstack"
  | "mobile"
  | "other"
  | "all";

type KeyFeaturesProps = {
  id: string;
  key: string;
  features: string[];
};

export interface WorkProps {
  id: string;
  name: string;
  category: Category;
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

  public filter: (category: Category) => WorkProps[] = (category) => {
    if (category === "all") return this.props.works;
    return this.props.works.filter((work) => work.category === category);
  };
}
