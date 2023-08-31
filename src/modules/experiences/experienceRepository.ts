import { Experience } from "../../pages/resume/domainObjects/Experience";
import { experienceData as experienceDataEn } from "./experienceData.en";
import { experienceData as experienceDataFr } from "./experienceData.fr";

export class ExperienceRepository {
  private lang: string = "";
  private memoizedExperiences: Experience[] = [];

  constructor(lang: string) {
    this.lang = lang;
    const data = lang === "fr" ? experienceDataFr : experienceDataEn;
    this.memoizedExperiences = data.map(
      (experience) => new Experience(experience)
    );
  }

  public findAll(lang: string = this.lang): Experience[] {
    if (lang === this.lang && this.memoizedExperiences.length > 0) {
      return this.memoizedExperiences;
    }

    const data = lang === "fr" ? experienceDataFr : experienceDataEn;
    const experiences = data.map((experience) => new Experience(experience));

    if (lang === this.lang) {
      this.memoizedExperiences = experiences;
    } else {
      this.memoizedExperiences = [];
    }

    this.lang = lang;

    return experiences;
  }
}
