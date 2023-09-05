import { translatingService } from "./setupServices";
import { GlobalCache, Language } from "../persistence/GlobalCache";

const cache = new GlobalCache(translatingService.language as Language);

export { cache };
