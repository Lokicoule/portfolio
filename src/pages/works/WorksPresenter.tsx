import { GlobalCache } from "../../sharedKernel/persistence/GlobalCache";
import { Presenter } from "../../sharedKernel/presentation/Presenter";
import { WorksViewModel } from "./WorksViewModel";
import { workData as workDataEn } from "./datas/workData.en";
import { workData as workDataFr } from "./datas/workData.fr";

export class WorksPresenter extends Presenter<WorksViewModel> {
  constructor(cache: GlobalCache) {
    super(cache);
  }

  protected setupSubscriptions() {
    this.cache.subscribe("lang", WorksPresenter.name, (lang: string) => {
      this.rebuildViewModel(lang);
    });
  }

  protected rebuildViewModel(lang: string) {
    const works = lang === "fr" ? workDataFr : workDataEn;

    this.vm = new WorksViewModel({
      works,
    });

    this.cb(this.vm);
  }

  public load(cb: (vm?: WorksViewModel) => void): void {
    this.rebuildViewModel(this.cache.get("lang"));

    super.load(cb);
  }

  public unload(): void {
    this.cache.unsubscribe("lang", WorksPresenter.name);

    super.unload();
  }
}
