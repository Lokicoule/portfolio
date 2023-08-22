import { LoggingService } from "../../shared/logging/loggingService";
import { MailingService } from "../../shared/mailing/mailingService";
import { NotificationService } from "../../shared/notifications/notificationsService";
import { ContactFormProps } from "./domainObjects/ContactForm";

export class ContactController {
  constructor(
    private notifications: NotificationService,
    private mailingService: MailingService,
    private loggingService: LoggingService
  ) {}

  public submitContactForm(data: ContactFormProps) {
    this.mailingService.sendEmail(
      data,
      () => this.notifications.showSuccess("Message sent successfully"),
      (error: Error) => {
        this.loggingService.logError(error);
        this.notifications.showError(
          "An error occurred while sending the message"
        );
      }
    );
  }
}
