import { GlobalCache } from "../../sharedKernel/persistence/GlobalCache";

enum WorkFilter {
  All = "all",
  Backend = "backend",
  Frontend = "frontend",
}

export class WorksController {
  constructor(private readonly globalCache: GlobalCache) {}

  public setWorkFilter(filter: string): void {
    if (Object.values(WorkFilter).includes(filter as WorkFilter)) {
      this.globalCache.set("workFilter", filter as WorkFilter);
    } else {
      console.warn(`Invalid work filter: ${filter}`);
    }
  }
}
