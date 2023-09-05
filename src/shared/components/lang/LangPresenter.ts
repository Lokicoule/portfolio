import { GlobalCache } from "../../persistence/GlobalCache";
import { LangViewModel } from "./LangViewModel";

export class LangPresenter {
  private vm?: LangViewModel;
  private cb: (vm?: LangViewModel) => void = () => {};

  constructor(private readonly cache: GlobalCache) {
    this.setupSubscriptions();
  }

  private setupSubscriptions() {
    this.cache.subscribe("lang", LangPresenter.name, (lang: string) =>
      this.rebuildViewModel(lang)
    );

    console.log("LangPresenter subscribed to lang", this.cache);
  }

  private rebuildViewModel(lang: string) {
    this.vm = new LangViewModel({
      lang,
    });

    this.cb(this.vm);
  }

  public load(cb: (vm?: LangViewModel) => void): void {
    this.rebuildViewModel(this.cache.get("lang"));
    cb(this.vm);
    this.cb = cb;
  }

  public unload(): void {
    this.cache.unsubscribe("lang", LangPresenter.name);
  }
}
