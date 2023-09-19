import { ContactController } from "../../pages/contact/ContactController";
import { LangController } from "../components/lang/LangController";
import { cache } from "./setupCaches";

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

const langController = new LangController(cache, notificationsService);

export { contactController, langController };
