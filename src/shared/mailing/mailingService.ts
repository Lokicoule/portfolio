import { send } from "@emailjs/browser";

export type EmailProps = {
  to_name?: string;
  from_email: string;
  from_name: string;
  message: string;
};

export class MailingService {
  public async sendEmail(
    emailProps: EmailProps,
    onSuccess: () => void,
    onFailure: (error: Error) => void
  ): Promise<void> {
    const emailParams = {
      to_name: emailProps.to_name,
      from_email: emailProps.from_email,
      from_name: emailProps.from_name,
      message: emailProps.message,
    };

    await send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      emailParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        onSuccess();
      })
      .catch((error) => {
        onFailure(error);
      });
  }
}
