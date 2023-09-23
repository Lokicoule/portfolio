import { LoggingService } from "../../shared/logging/loggingService";
import { MailingService } from "../../shared/mailing/mailingService";
import { Notification } from "../../shared/notifications/domainObjects/Notification";
import { NotificationService } from "../../shared/notifications/notificationsService";
import { ContactForm, ContactFormProps } from "./domainObjects/ContactForm";

export class ContactController {
  private isPending = false;

  constructor(
    private notifications: NotificationService,
    private mailingService: MailingService,
    private loggingService: LoggingService
  ) {}

  public async submitContactForm(data: ContactFormProps): Promise<void> {
    if (this.isPending) {
      return;
    }

    const contactFormOrError = ContactForm.create(data);

    if (contactFormOrError instanceof Error) {
      this.notifications.showToast(
        Notification.createError(
          `Contact error:\n${contactFormOrError.message}`
        )
      );
      return;
    }

    const notification = Notification.createInfo("Sending message...");

    this.notifications.showToast(notification);
    this.isPending = true;

    try {
      await this.mailingService.sendEmail(
        data,
        () =>
          this.notifications.updateToast(
            notification.withMessageAndType("Message sent!", "success")
          ),
        (error: Error) => {
          this.loggingService.logError(error);
          this.notifications.updateToast(
            notification.withMessageAndType("Message failed to send!", "error")
          );
        }
      );
    } finally {
      this.isPending = false;
    }
  }
}
