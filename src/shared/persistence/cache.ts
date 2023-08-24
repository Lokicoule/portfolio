type Callback<T> = (data: T | null) => void;

export abstract class Cache<T> {
  protected data: T | null = null;

  protected subscribers: Map<string, Callback<T>> = new Map();

  public abstract fetch(): T;

  public getData(): T {
    if (!this.data) {
      this.data = this.fetch();
    }
    return this.data;
  }

  public subscribe(key: string, callback: Callback<T>): void {
    this.subscribers.set(key, callback);
  }

  public unsubscribe(key: string): void {
    this.subscribers.delete(key);
  }

  protected notifySubscribers(): void {
    this.subscribers.forEach((callback) => {
      callback(this.data);
    });
  }
}
