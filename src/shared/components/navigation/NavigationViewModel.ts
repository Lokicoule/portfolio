export interface NavigationItemProps {
  id: string;
  name: string;
  routePath: string;
  icon: JSX.Element;
}

export interface NavigationViewModelProps {
  items: NavigationItemProps[];
}

export class NavigationViewModel {
  constructor(private readonly props: NavigationViewModelProps) {}

  public get items() {
    return this.props.items;
  }
}
