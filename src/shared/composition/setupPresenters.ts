import { translatingService } from ".";
import { AboutPresenter } from "../../pages/about/AboutPresenter";
import { ResumePresenter } from "../../pages/resume/ResumePresenter";
import { WorksPresenter } from "../../pages/works/WorksPresenter";
import { LangPresenter } from "../components/lang/LangPresenter";
import { NavigationPresenter } from "../components/navigation/NavigationPresenter";

import { cache } from "./setupCaches";

const aboutPresenter = new AboutPresenter(cache, translatingService);
const langPresenter = new LangPresenter(cache);
const navigationPresenter = new NavigationPresenter(cache);
const resumePresenter = new ResumePresenter(cache, translatingService);
const worksPresenter = new WorksPresenter(cache, translatingService);

export {
  aboutPresenter,
  langPresenter,
  navigationPresenter,
  resumePresenter,
  worksPresenter,
};
