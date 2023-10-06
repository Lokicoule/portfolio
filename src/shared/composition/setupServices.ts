import { LoggingService } from "../services/logging/loggingService";
import { MailingService } from "../services/mailing/mailingService";
import { NotificationService } from "../services/notifications/notificationsService";
import { RoutingService } from "../services/routing/routingService";
import { TranslatingService } from "../services/translating/translatingService";
import { LocalStorageService } from "../services/storage/localStorageService";

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
