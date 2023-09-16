import { GlobalCache } from "../../sharedKernel/persistence/GlobalCache";
import { Presenter } from "../../sharedKernel/presentation/Presenter";
import { SubscriptionManager } from "../../sharedKernel/presentation/SubscriptionManager";
import { AboutViewModel } from "./AboutViewModel";
import { serviceData as serviceDataEn } from "./datas/serviceData.en";
import { serviceData as serviceDataFr } from "./datas/serviceData.fr";

export class AboutPresenter extends Presenter<AboutViewModel> {
  private subscriptionManager: SubscriptionManager;

  constructor(cache: GlobalCache) {
    super(cache);
    this.subscriptionManager = new SubscriptionManager(
      cache,
      "lang",
      AboutPresenter.name,
      (lang) => this.handleLangChange(lang)
    );
  }

  private handleLangChange(lang: string) {
    this.rebuildViewModel(lang);
    this.cb(this.vm);
  }

  protected rebuildViewModel(lang: string) {
    const services = lang === "fr" ? serviceDataFr : serviceDataEn;

    this.vm = new AboutViewModel({
      services,
    });
  }

  public load(cb: (vm?: AboutViewModel) => void): void {
    this.rebuildViewModel(this.subscriptionManager.getInitialValue());

    super.load(cb);
  }

  public unload(): void {
    this.subscriptionManager.unsubscribe();

    super.unload();
  }
}
