export interface NotFoundViewModelProps {
  lang: string;
}

export class NotFoundViewModel {
  constructor(private readonly props: NotFoundViewModelProps) {}

  public get lang() {
    return this.props.lang;
  }
}
