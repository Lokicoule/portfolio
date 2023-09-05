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
    this.subscribers = new Map<KeyInCache, Map<string, Callback>>();
    this.data = {
      lang,
      resume: {
        experiences: [
          {
            id: "",
            date: "",
            title: "",
            company: "",
            description: "",
            link: "",
            linkText: "",
            technologiesUsed: {},
            achievementsAndContributions: [],
            challengesAndSolutions: [],
            collaborationAndTeamwork: [],
            impactAndLessonsLearned: [],
          },
        ],
        educationItems: [],
        lineItems: [],
      },
    } as Record<KeyInCache, GlobalState[KeyInCache]>;
  }

  subscribe(key: KeyInCache, subscriberName: string, cb: Callback) {
    let subscribersForKey = this.subscribers.get(key);
    if (!subscribersForKey) {
      subscribersForKey = new Map<string, Callback>();
      this.subscribers.set(key, subscribersForKey);
    }

    const alreadySubscribed = subscribersForKey.get(subscriberName);
    if (alreadySubscribed) {
      console.log(`${subscriberName} already subscribed to ${key}, skipping.`);
    }

    subscribersForKey.set(subscriberName, cb);
  }

  get(key: KeyInCache) {
    return this.data[key];
  }

  set(key: KeyInCache, data: GlobalState[KeyInCache]) {
    this.data[key] = data;
    this.notify(key);
  }

  notify(key: KeyInCache) {
    const newState = this.get(key);
    const subscribersForKey = this.subscribers.get(key);
    if (!subscribersForKey) {
      return;
    }

    for (const [, subscriberCallback] of subscribersForKey) {
      subscriberCallback(newState);
    }
  }

  unsubscribe(key: KeyInCache, subscriberName: string) {
    const subscribersForKey = this.subscribers.get(key);
    if (!subscribersForKey) {
      return;
    }

    subscribersForKey.delete(subscriberName);
  }
}
