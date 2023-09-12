import { GlobalCache } from "../../sharedKernel/persistence/GlobalCache";
import { Presenter } from "../../sharedKernel/presentation/Presenter";
import { SubscriptionManager } from "../../sharedKernel/presentation/SubscriptionManager";
import { WorksViewModel } from "./WorksViewModel";
import { workData as workDataEn } from "./datas/workData.en";
import { workData as workDataFr } from "./datas/workData.fr";

export class WorksPresenter extends Presenter<WorksViewModel> {
  private subscriptionManager: SubscriptionManager;

  constructor(cache: GlobalCache) {
    super(cache);
    this.subscriptionManager = new SubscriptionManager(
      cache,
      "lang",
      WorksPresenter.name,
      (lang) => this.handleLangChange(lang)
    );
  }

  private handleLangChange(lang: string) {
    this.rebuildViewModel(lang);
    this.cb(this.vm);
  }

  protected rebuildViewModel(lang: string) {
    const works = lang === "fr" ? workDataFr : workDataEn;

    this.vm = new WorksViewModel({
      works,
    });
  }

  public load(cb: (vm?: WorksViewModel) => void): void {
    this.rebuildViewModel(this.subscriptionManager.getInitialValue());

    super.load(cb);
  }

  public unload(): void {
    this.subscriptionManager.unsubscribe();

    super.unload();
  }
}
