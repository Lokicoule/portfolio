import { NotificationId } from "./NotificationId";

export type NotificationType = "success" | "error" | "warning" | "info";

export class Notification {
  private readonly id: NotificationId;
  private readonly message: string;
  private readonly type: NotificationType;

  private constructor(
    id: NotificationId,
    message: string,
    type: NotificationType
  ) {
    this.id = id;
    this.message = message;
    this.type = type;
  }

  public static createInfo(message: string, id?: NotificationId): Notification {
    return new Notification(id || NotificationId.create(), message, "info");
  }

  public static createSuccess(
    message: string,
    id?: NotificationId
  ): Notification {
    return new Notification(id || NotificationId.create(), message, "success");
  }

  public static createWarning(
    message: string,
    id?: NotificationId
  ): Notification {
    return new Notification(id || NotificationId.create(), message, "warning");
  }

  public static createError(
    message: string,
    id?: NotificationId
  ): Notification {
    return new Notification(id || NotificationId.create(), message, "error");
  }

  public getId(): NotificationId {
    return this.id;
  }

  public getMessage(): string {
    return this.message;
  }

  public getType(): NotificationType {
    return this.type;
  }

  public withMessage(message: string): Notification {
    return new Notification(this.id, message, this.type);
  }

  public withType(type: NotificationType): Notification {
    return new Notification(this.id, this.message, type);
  }

  public withMessageAndType(
    message: string,
    type: NotificationType
  ): Notification {
    return new Notification(this.id, message, type);
  }
}
