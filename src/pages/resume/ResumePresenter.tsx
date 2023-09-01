import { ExperienceRepository } from "../../modules/experiences/experienceRepository";
import { ResumeViewModel } from "./domainObjects/ResumeViewModel";

export class ResumePresenter {
  private lang: string;
  private experienceRepository: ExperienceRepository;
  private cachedResume: ResumeViewModel | undefined;

  constructor(lang: string, experienceRepository: ExperienceRepository) {
    this.lang = lang;
    this.experienceRepository = experienceRepository;
    this.cachedResume = undefined;
  }

  public getViewModel(): ResumeViewModel {
    if (this.cachedResume) {
      return this.cachedResume;
    }

    const experiences = this.experienceRepository.findAll(this.lang);

    const educationItems = [
      {
        id: 1,
        date: "2023 - Present",
        title: "The Software Essentialist",
        bg: "#FFF4F4",
        link: "https://www.essentialist.dev/",
      },
      {
        id: 2,
        date: "2012 - 2017",
        title: "Expert en informatique et systèmes d’information",
        level: "RNCP4510, Niveau 7",
        link: "https://www.francecompetences.fr/recherche/rncp/4510/",
        bg: "#FFF1FB",
      },
    ];

    const lineItems = [
      {
        id: "01",
        color: "#FF6464",
        name: "Web Design",
        number: 80,
      },
      {
        id: "02",
        color: "#9272D4",
        name: "Mobile App ",
        number: 95,
      },
      {
        id: "03",
        color: "#5185D4",
        name: "Illustrator",
        number: 65,
      },
      {
        id: "03",
        color: "#CA56F2",
        name: "Photoshop",
        number: 75,
      },
    ];

    const resume = new ResumeViewModel({
      experiences,
      educationItems,
      lineItems,
    });

    this.cachedResume = resume;

    return resume;
  }

  public rebuildViewModel(
    lang: string,
    experienceRepository: ExperienceRepository
  ): void {
    this.lang = lang;
    this.experienceRepository = experienceRepository;
    this.cachedResume = undefined;
  }
}
