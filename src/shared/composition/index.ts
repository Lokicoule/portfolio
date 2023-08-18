import { NotificationService } from "../notifications/notificationsService";
import { RoutingService } from "../routing/routingService";

const notificationsService = new NotificationService();
const routingService = new RoutingService();

export { notificationsService, routingService };
