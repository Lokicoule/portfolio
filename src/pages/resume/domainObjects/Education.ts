export type EducationProps = {
  id: number;
  date: string;
  title: string;
  level?: string;
  link?: string;
};

export class Education {
  constructor(private readonly props: EducationProps) {}

  public get attributes() {
    return this.props;
  }
}
