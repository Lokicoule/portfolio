import { GlobalCache } from "../../sharedKernel/persistence/GlobalCache";
import { Presenter } from "../../sharedKernel/presentation/Presenter";
import { experienceData as experienceDataEn } from "./datas/experienceData.en";
import { experienceData as experienceDataFr } from "./datas/experienceData.fr";
import { educationData as educationDataEn } from "./datas/educationData.en";
import { educationData as educationDataFr } from "./datas/educationData.fr";
import { Experience } from "./domainObjects/Experience";
import { ResumeViewModel } from "./ResumeViewModel";
import { Education } from "./domainObjects/Education";

export class ResumePresenter extends Presenter<ResumeViewModel> {
  constructor(cache: GlobalCache) {
    super(cache);
  }

  protected setupSubscriptions() {
    this.cache.subscribe("lang", ResumePresenter.name, (lang: string) => {
      this.rebuildViewModel(lang);
    });
  }

  protected rebuildViewModel(lang: string) {
    const data = lang === "fr" ? experienceDataFr : experienceDataEn;
    const dataEducation = lang === "fr" ? educationDataFr : educationDataEn;

    const experiences = data.map((experience) => new Experience(experience));
    const educations = dataEducation.map(
      (education) => new Education(education)
    );

    this.vm = new ResumeViewModel({
      experiences,
      educations,
      lineItems: [
        {
          id: "1",
          name: "Languages",
          color: "#F95054",
          number: 100,
        },
      ],
    });

    this.cb(this.vm);
  }

  public load(cb: (vm?: ResumeViewModel) => void): void {
    this.rebuildViewModel(this.cache.get("lang"));

    super.load(cb);
  }

  public unload(): void {
    this.cache.unsubscribe("lang", ResumePresenter.name);

    super.unload();
  }
}
