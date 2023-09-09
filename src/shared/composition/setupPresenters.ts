import { ResumePresenter } from "../../pages/resume/ResumePresenter";
import { LangPresenter } from "../components/lang/LangPresenter";
import { cache } from "./setupCaches";
import { WorksPresenter } from "../../pages/works/WorksPresenter";

const resumePresenter = new ResumePresenter(cache);
const langPresenter = new LangPresenter(cache);
const worksPresenter = new WorksPresenter(cache);

export { resumePresenter, langPresenter, worksPresenter };
