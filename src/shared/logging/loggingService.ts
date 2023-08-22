import * as Sentry from "@sentry/react";

export class LoggingService {
  public logError(error: Error): void {
    Sentry.captureException(error);
  }

  public init(): void {
    try {
      Sentry.init({
        dsn: import.meta.env.VITE_SENTRY_DSN,
        environment: import.meta.env.MODE,
        release: import.meta.env.VITE_RELEASE,
      });
    } catch (error) {
      console.error("Error initializing Sentry:", error);
    }
  }
}
