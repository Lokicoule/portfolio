import { GlobalCache } from "../../shared/persistence/GlobalCache";
import { experienceData as experienceDataEn } from "./datas/experienceData.en";
import { experienceData as experienceDataFr } from "./datas/experienceData.fr";
import { Experience } from "./domainObjects/Experience";
import { ResumeViewModel } from "./ResumeViewModel";

export class ResumePresenter {
  private vm?: ResumeViewModel;
  private cb: (vm?: ResumeViewModel) => void;

  constructor(private readonly cache: GlobalCache) {
    this.vm = undefined;
    this.cb = () => {};
    this.setupSubscriptions();
  }

  private setupSubscriptions() {
    this.cache.subscribe("lang", ResumePresenter.name, (lang: string) => {
      console.log("lang changed,", lang);
      this.rebuildViewModel(lang);
    });

    console.log("subscriptions setup for resume presenter", this.cache);
  }

  private rebuildViewModel(lang: string) {
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

    console.log("rebuilded resume view model");

    this.cb(this.vm);
  }

  public load(cb: (vm?: ResumeViewModel) => void): void {
    console.log("loading resume presenter");
    console.log(this.vm);
    this.rebuildViewModel(this.cache.get("lang"));
    cb(this.vm);
    this.cb = cb;
  }

  public unload(): void {
    this.cache.unsubscribe("lang", ResumePresenter.name);
  }
}
