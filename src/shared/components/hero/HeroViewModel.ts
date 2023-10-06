export type HeroInfo = {
  label: string;
  value: string;
  icon: JSX.Element;
  href?: string;
};

export type HeroViewModelProps = {
  infos: HeroInfo[];
};

export class HeroViewModel {
  constructor(private readonly props: HeroViewModelProps) {}

  public get infos() {
    return this.props.infos;
  }
}
