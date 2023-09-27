import { GlobalCache } from "../../../sharedKernel/persistence/GlobalCache";
import { Presenter } from "../../../sharedKernel/presentation/Presenter";
import { SubscriptionManager } from "../../../sharedKernel/presentation/SubscriptionManager";
import { TranslatingService } from "../../translating/translatingService";
import { HeroViewModel } from "./HeroViewModel";

export class HeroPresenter extends Presenter<HeroViewModel> {
  private subscriptionManager: SubscriptionManager;
  private translatingService: TranslatingService;

  constructor(cache: GlobalCache, service: TranslatingService) {
    super(cache);
    this.subscriptionManager = new SubscriptionManager(
      cache,
      "lang",
      HeroPresenter.name,
      (lang) => this.handleContactChange(lang)
    );
    this.translatingService = service;
  }

  private handleContactChange(lang: string) {
    this.rebuildViewModel(lang);
    this.cb(this.vm);
  }

  protected rebuildViewModel(lang: string) {
    this.vm = new HeroViewModel({
      lang,
    });
  }

  public load(cb: (vm?: HeroViewModel) => void): void {
    this.rebuildViewModel(this.subscriptionManager.getValue());

    super.load(cb);
  }

  public unload(): void {
    this.subscriptionManager.unsubscribe();

    super.unload();
  }

  public translateAndSanitize(key: string): string {
    return this.translatingService.translateAndSanitize(key);
  }
}
