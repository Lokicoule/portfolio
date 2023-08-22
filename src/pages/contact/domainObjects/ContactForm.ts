export interface ContactFormProps {
  email: string;
  name: string;
  title: string;
  message: string;
}

export class ContactForm {
  private props: ContactFormProps;

  private constructor(props: ContactFormProps) {
    this.props = props;
  }

  public static create(props: ContactFormProps): ContactForm | Error {
    if (!props.email.includes("@")) return new Error("Invalid email");
    if (props.name.length < 1 || props.name.length > 20)
      return new Error("Invalid name");
    if (props.title.length < 5 || props.title.length > 200)
      return new Error("Invalid title");
    if (props.message.length < 10 || props.message.length > 5000)
      return new Error("Invalid message");

    return new ContactForm(props);
  }

  public toDTO() {
    return {
      email: this.props.email,
      name: this.props.name,
      title: this.props.title,
      message: this.props.message,
    };
  }
}
