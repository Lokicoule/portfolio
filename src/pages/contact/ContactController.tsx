import { LoggingService } from "../../shared/logging/loggingService";
import { MailingService } from "../../shared/mailing/mailingService";
import { Notification } from "../../shared/notifications/Notification";
import { NotificationService } from "../../shared/notifications/notificationsService";
import { ContactFormProps } from "./domainObjects/ContactForm";

export class ContactController {
  private _isLoading = false;

  constructor(
    private notifications: NotificationService,
    private mailingService: MailingService,
    private loggingService: LoggingService
  ) {}

  public async submitContactForm(data: ContactFormProps): Promise<void> {
    if (this._isLoading) {
      return;
    }

    const notification = Notification.createInfo("Sending message...");

    this.notifications.showToast(notification);
    this._isLoading = true;

    try {
      await this.mailingService.sendEmail(data);
      this.notifications.updateToast(
        notification.withMessageAndType("Message sent!", "success")
      );
    } catch (error) {
      this.loggingService.logError(error as Error);
      this.notifications.updateToast(
        notification.withMessageAndType("Message failed to send!", "error")
      );
      throw error;
    } finally {
      this._isLoading = false;
    }
  }
}
