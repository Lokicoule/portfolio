import { GlobalCache } from "../../sharedKernel/persistence/GlobalCache";
import { Presenter } from "../../sharedKernel/presentation/Presenter";
import { ResumeViewModel } from "./ResumeViewModel";
import { educationData as educationDataEn } from "./datas/educationData.en";
import { educationData as educationDataFr } from "./datas/educationData.fr";
import { experienceData as experienceDataEn } from "./datas/experienceData.en";
import { experienceData as experienceDataFr } from "./datas/experienceData.fr";
import { skillData as skillDataEn } from "./datas/skillData.en";
import { skillData as skillDataFr } from "./datas/skillData.fr";

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
    const experiences = lang === "fr" ? experienceDataFr : experienceDataEn;
    const educations = lang === "fr" ? educationDataFr : educationDataEn;
    const skills = lang === "fr" ? skillDataFr : skillDataEn;

    this.vm = new ResumeViewModel({
      experiences,
      educations,
      skills,
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
