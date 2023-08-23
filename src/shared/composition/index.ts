import { LoggingService } from "../logging/loggingService";
import { MailingService } from "../mailing/mailingService";
import { NotificationService } from "../notifications/notificationsService";
import { RoutingService } from "../routing/routingService";
import { TranslatingService } from "../translating/translatingService";
import { ContactController } from "../../pages/contact/ContactController";

const mailingService = new MailingService();
const notificationsService = new NotificationService();
const routingService = new RoutingService();
const loggingService = new LoggingService();
const translatingService = new TranslatingService();

const contactController = new ContactController(
  notificationsService,
  mailingService,
  loggingService
);

loggingService.init();
translatingService.init();

export {
  contactController,
  loggingService,
  mailingService,
  notificationsService,
  routingService,
  translatingService,
};
