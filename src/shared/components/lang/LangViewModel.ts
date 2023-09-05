export interface LangViewModelProps {
  lang: string;
}

export class LangViewModel {
  constructor(private readonly props: LangViewModelProps) {}

  public get lang() {
    return this.props.lang;
  }
}
