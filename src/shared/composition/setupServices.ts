import { LoggingService } from "../logging/loggingService";
import { MailingService } from "../mailing/mailingService";
import { NotificationService } from "../notifications/notificationsService";
import { RoutingService } from "../routing/routingService";
import { TranslatingService } from "../translating/translatingService";
import { LocalStorageService } from "../storage/localStorageService";

const mailingService = new MailingService();
const notificationsService = new NotificationService();
const routingService = new RoutingService();
const loggingService = new LoggingService();
const translatingService = new TranslatingService();
const localStorageService = new LocalStorageService();

loggingService.init();
translatingService.init();

export {
  loggingService,
  mailingService,
  notificationsService,
  routingService,
  translatingService,
  localStorageService,
};
