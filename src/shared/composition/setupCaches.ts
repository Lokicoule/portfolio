import { translatingService } from "./setupServices";
import {
  GlobalCache,
  Language,
} from "../../sharedKernel/persistence/GlobalCache";

const cache = new GlobalCache(translatingService.language as Language, "all");

export { cache };
