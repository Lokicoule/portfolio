export interface ContactFormProps {
  email: string;
  name: string;
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
    if (props.message.length < 10 || props.message.length > 5000)
      return new Error("Invalid message");

    return new ContactForm(props);
  }

  public toDTO() {
    return {
      email: this.props.email,
      name: this.props.name,
      message: this.props.message,
    };
  }
}
