export interface ContactViewModelProps {
  lang: string;
}

export class ContactViewModel {
  constructor(private readonly props: ContactViewModelProps) {}

  public get lang() {
    return this.props.lang;
  }
}
