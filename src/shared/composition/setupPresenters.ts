import { ResumePresenter } from "../../pages/resume/ResumePresenter";
import { LangPresenter } from "../components/lang/LangPresenter";
import { cache } from "./setupCaches";

const resumePresenter = new ResumePresenter(cache);
const langPresenter = new LangPresenter(cache);

export { resumePresenter, langPresenter };
