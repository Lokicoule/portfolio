import { Presenter } from "../../../sharedKernel/presentation/Presenter";
import { GlobalCache } from "../../../sharedKernel/persistence/GlobalCache";
import { LangViewModel } from "./LangViewModel";

export class LangPresenter extends Presenter<LangViewModel> {
  constructor(cache: GlobalCache) {
    super(cache);
  }

  protected setupSubscriptions() {
    this.cache.subscribe("lang", LangPresenter.name, (lang: string) =>
      this.rebuildViewModel(lang)
    );
  }

  protected rebuildViewModel(lang: string) {
    this.vm = new LangViewModel({
      lang,
    });

    this.cb(this.vm);
  }

  public load(cb: (vm?: LangViewModel) => void): void {
    this.rebuildViewModel(this.cache.get("lang"));
    super.load(cb);
  }

  public unload(): void {
    this.cache.unsubscribe("lang", LangPresenter.name);

    super.unload();
  }
}
