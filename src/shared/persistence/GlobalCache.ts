export type Language = "en" | "fr";

type GlobalState = {
  lang: Language;
};

type State = GlobalState[keyof GlobalState];

type Callback = (data: State) => void;

type KeyInCache = "lang";

export class GlobalCache {
  private subscribers: Map<KeyInCache, Map<string, Callback>>;
  private data: Record<KeyInCache, GlobalState[KeyInCache]>;

  constructor(lang: Language) {
    this.subscribers = new Map();

    this.data = {
      lang,
    } as Record<KeyInCache, GlobalState[KeyInCache]>;
  }

  subscribe(key: KeyInCache, subscriberName: string, cb: Callback) {
    let keySubscribers = this.subscribers.get(key);

    if (!keySubscribers) {
      keySubscribers = new Map();
    }

    if (keySubscribers.has(subscriberName)) {
      console.log(`${subscriberName} already subscribed to ${key}, skipping.`);
    }

    keySubscribers.set(subscriberName, cb);
    this.subscribers.set(key, keySubscribers);
    console.log(
      `Subscribing ${subscriberName} to ${key}`,
      keySubscribers,
      this.subscribers
    );
  }

  get(key: KeyInCache) {
    return this.data[key];
  }

  set(key: KeyInCache, data: GlobalState[KeyInCache]) {
    this.data[key] = data;
    this.notify(key);
  }

  notify(key: KeyInCache) {
    console.log(`Notifying subscribers of ${key}`);
    const newState = this.get(key);

    const keySubscribers = this.subscribers.get(key);
    console.log(`Subscribers of ${key}`, keySubscribers);
    if (!keySubscribers) {
      return;
    }

    keySubscribers.forEach((cb) => {
      cb(newState);
    });
  }

  unsubscribe(key: KeyInCache, subscriberName: string) {
    const keySubscribers = this.subscribers.get(key);

    if (keySubscribers) {
      keySubscribers.delete(subscriberName);
    }
  }
}
