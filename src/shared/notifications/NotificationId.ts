import { v4 as uuidv4 } from "uuid";

export class NotificationId {
  private readonly value: string;

  private constructor(value?: string) {
    this.value = value || uuidv4();
  }

  public static create(value?: string): NotificationId {
    return new NotificationId(value);
  }

  public getValue(): string {
    return this.value;
  }
}
