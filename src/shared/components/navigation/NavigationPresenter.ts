import { Presenter } from "../../../sharedKernel/presentation/Presenter";
import { GlobalCache } from "../../../sharedKernel/persistence/GlobalCache";
import { NavigationViewModel } from "./NavigationViewModel";
import { SubscriptionManager } from "../../../sharedKernel/presentation/SubscriptionManager";

import { navigationData as navigationDataEn } from "./datas/navigationData.en";
import { navigationData as navigationDataFr } from "./datas/navigationData.fr";

export class NavigationPresenter extends Presenter<NavigationViewModel> {
  private subscriptionManager: SubscriptionManager;

  constructor(cache: GlobalCache) {
    super(cache);
    this.subscriptionManager = new SubscriptionManager(
      cache,
      "lang",
      NavigationPresenter.name,
      (lang) => this.handleLangChange(lang)
    );
  }

  private handleLangChange(lang: string) {
    this.rebuildViewModel(lang);
    this.cb(this.vm);
  }

  protected rebuildViewModel(lang: string) {
    this.vm = new NavigationViewModel({
      items: lang === "fr" ? navigationDataFr : navigationDataEn,
    });
  }

  public load(cb: (vm?: NavigationViewModel) => void): void {
    this.rebuildViewModel(this.subscriptionManager.getValue());

    super.load(cb);
  }

  public unload(): void {
    this.subscriptionManager.unsubscribe();

    super.unload();
  }
}
