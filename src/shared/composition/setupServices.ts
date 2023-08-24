import { LoggingService } from "../logging/loggingService";
import { MailingService } from "../mailing/mailingService";
import { NotificationService } from "../notifications/notificationsService";
import { RoutingService } from "../routing/routingService";
import { TranslatingService } from "../translating/translatingService";

const mailingService = new MailingService();
const notificationsService = new NotificationService();
const routingService = new RoutingService();
const loggingService = new LoggingService();
const translatingService = new TranslatingService();

loggingService.init();
translatingService.init();

export {
  loggingService,
  mailingService,
  notificationsService,
  routingService,
  translatingService,
};
