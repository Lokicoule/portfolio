import { ResumePresenter } from "../../pages/resume/ResumePresenter";
import { WorksPresenter } from "../../pages/works/WorksPresenter";
import { LangPresenter } from "../components/lang/LangPresenter";
import { NavigationPresenter } from "../components/navigation/NavigationPresenter";

import { cache } from "./setupCaches";

const resumePresenter = new ResumePresenter(cache);
const langPresenter = new LangPresenter(cache);
const worksPresenter = new WorksPresenter(cache);
const navigationPresenter = new NavigationPresenter(cache);
export { langPresenter, navigationPresenter, resumePresenter, worksPresenter };
