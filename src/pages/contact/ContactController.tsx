import { LoggingService } from "../../shared/logging/loggingService";
import { MailingService } from "../../shared/mailing/mailingService";
import { Notification } from "../../shared/notifications/Notification";
import { NotificationService } from "../../shared/notifications/notificationsService";
import { ContactFormProps } from "./domainObjects/ContactForm";

export class ContactController {
  constructor(
    private notifications: NotificationService,
    private mailingService: MailingService,
    private loggingService: LoggingService
  ) {}

  public submitContactForm(data: ContactFormProps) {
    const notification = Notification.createInfo("Sending message...");

    this.notifications.showToast(notification);

    this.mailingService.sendEmail(
      data,
      () => {
        this.notifications.updateToast(
          notification.withMessageAndType("Message sent!", "success")
        );
      },
      (error: Error) => {
        this.loggingService.logError(error);
        this.notifications.updateToast(
          notification.withMessageAndType("Message failed to send!", "error")
        );
      }
    );
  }
}
