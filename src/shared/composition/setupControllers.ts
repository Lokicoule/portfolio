import { ContactController } from "../../pages/contact/ContactController";
import { ThemeController } from "../components/theme/ThemeController";
import {
  loggingService,
  mailingService,
  notificationsService,
} from "./setupServices";

const contactController = new ContactController(
  notificationsService,
  mailingService,
  loggingService
);
const themeController = new ThemeController();

export { contactController, themeController };
