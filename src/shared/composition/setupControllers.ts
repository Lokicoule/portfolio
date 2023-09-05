import { ContactController } from "../../pages/contact/ContactController";
import { LangController } from "../components/lang/LangController";
import { ModeController } from "../components/mode/ModeController";
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
const modeController = new ModeController();

export { contactController, langController, modeController };
