import { ContactController } from "../../pages/contact/ContactController";
import { ThemeController } from "../components/theme/ThemeController";
import {
  loggingService,
  mailingService,
  notificationsService,
  translatingService,
} from "./setupServices";

const contactController = new ContactController(
  notificationsService,
  mailingService,
  loggingService
);
const themeController = new ThemeController(translatingService);

export { contactController, themeController };
