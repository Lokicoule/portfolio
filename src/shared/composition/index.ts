import { NotificationService } from "../notifications/notificationsService";
import { RoutingService } from "../routing/routingService";
import { MailingService } from "../mailing/mailingService";

import { ContactController } from "../../pages/contact/ContactController";

const mailingService = new MailingService();
const notificationsService = new NotificationService();
const routingService = new RoutingService();

const contactController = new ContactController(
  notificationsService,
  mailingService
);

export {
  mailingService,
  notificationsService,
  routingService,
  contactController,
};
