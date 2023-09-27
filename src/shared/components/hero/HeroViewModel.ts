export interface HeroViewModelProps {
  lang: string;
}

export class HeroViewModel {
  constructor(private readonly props: HeroViewModelProps) {}

  public get lang() {
    return this.props.lang;
  }
}
