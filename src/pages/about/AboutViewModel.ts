export interface ServiceProps {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface AboutViewModelProps {
  services: ServiceProps[];
}

export class AboutViewModel {
  constructor(private readonly props: AboutViewModelProps) {}

  public get services(): ServiceProps[] {
    return this.props.services;
  }
}
