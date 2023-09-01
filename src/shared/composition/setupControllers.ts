import { ContactController } from "../../pages/contact/ContactController";
import { LangController } from "../components/lang/LangController";

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

const langController = new LangController();

export { contactController, langController };
