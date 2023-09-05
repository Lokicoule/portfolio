export type Language = "en" | "fr";

export interface ResumeState {
  experiences: {
    id: string;
    date: string;
    title: string;
    company: string;
    description: string;
    link: string;
    linkText: string;
    technologiesUsed: {
      languages?: string[];
      frameworks?: string[];
      libraries?: string[];
      tools?: string[];
      architectures?: string[];
      databases?: string[];
    };
    achievementsAndContributions: string[];
    challengesAndSolutions: string[];
    collaborationAndTeamwork: string[];
    impactAndLessonsLearned: string[];
  }[];
  educationItems: {
    id: string;
    date: string;
    title: string;
    level?: string;
    link: string;
    bg: string;
  }[];
  lineItems: {
    id: string;
    color: string;
    name: string;
    number: number;
  }[];
}

type GlobalState = {
  lang: Language;
  resume: ResumeState;
};

type State = GlobalState[keyof GlobalState];

type Callback = (data: State) => void;

type KeyInCache = "lang" | "resume";

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
}
