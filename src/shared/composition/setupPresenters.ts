import { experienceRepository } from "./setupRepositories";
import { ResumePresenter } from "../../pages/resume/ResumePresenter";
import { translatingService } from ".";

const resumePresenter = new ResumePresenter(
  translatingService.language,
  experienceRepository
);

export { resumePresenter };
