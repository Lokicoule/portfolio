import { GlobalCache } from "../../persistence/GlobalCache";
import { LangViewModel } from "./LangViewModel";

export class LangPresenter {
  private vm?: LangViewModel;

  constructor(private readonly cache: GlobalCache) {
    this.setupSubscriptions();
  }

  private setupSubscriptions() {
    this.cache.subscribe("lang", LangPresenter.name, () =>
      this.rebuildViewModel()
    );
  }

  private rebuildViewModel() {
    this.vm = new LangViewModel({
      lang: this.cache.get("lang"),
    });
  }

  public load(cb: (vm?: LangViewModel) => void): void {
    this.rebuildViewModel();
    cb(this.vm);
  }

  public unload(): void {
    this.cache.unsubscribe("lang", LangPresenter.name);
  }
}
