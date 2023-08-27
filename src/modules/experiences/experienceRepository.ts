import {
  Experience,
  ExperienceProps,
} from "../../pages/resume/domainObjects/Experience";
import { experienceData } from "./experienceData";

export class ExperienceRepository {
  private Experiences: Experience[] = [];

  constructor(data: ExperienceProps[] = experienceData) {
    this.Experiences = data.map((experience) => {
      return new Experience(experience);
    });
  }

  public findAll(): Experience[] {
    return this.Experiences;
  }
}
