import { EmailProps } from "../../../shared/mailing/mailingService";

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
    if (
      !props.email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/)
    ) {
      return new Error("Email must be valid");
    }
    if (props.name.length < 2 || props.name.length > 50) {
      return new Error("Name must be between 2 and 50 characters");
    }
    if (props.message.length < 10 || props.message.length > 500) {
      return new Error("Message must be between 10 and 500 characters");
    }

    return new ContactForm(props);
  }

  public toDTO(): EmailProps {
    return {
      from_email: this.props.email,
      from_name: this.props.name,
      message: this.props.message,
    };
  }
}
