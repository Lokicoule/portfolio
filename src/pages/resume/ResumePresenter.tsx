import { GlobalCache } from "../../sharedKernel/persistence/GlobalCache";
import { Presenter } from "../../sharedKernel/presentation/Presenter";
import { experienceData as experienceDataEn } from "./datas/experienceData.en";
import { experienceData as experienceDataFr } from "./datas/experienceData.fr";
import { Experience } from "./domainObjects/Experience";
import { ResumeViewModel } from "./ResumeViewModel";

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

    const experiences = data.map((experience) => new Experience(experience));

    this.vm = new ResumeViewModel({
      experiences,
      educationItems: [
        {
          id: 1,
          title: "Master of Science in Computer Science",
          date: "2015-01-01",
          level: "University of California, Berkeley",
          bg: "#F6E5F5",
          link: "https://www.berkeley.edu/",
        },
      ],
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
