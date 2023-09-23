import { useState } from "react";

export type AsyncState = {
  isLoading: boolean;
  isSuccessful: boolean;
  error?: Error;
};

export const useAsyncCallback = <TArgs extends unknown[], TReturn>(
  fn: (...args: TArgs) => Promise<TReturn>
): [AsyncState, (...args: TArgs) => Promise<TReturn | undefined>] => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const callback = async (...args: TArgs) => {
    setIsLoading(true);
    try {
      const result = await fn(...args);
      setIsSuccessful(true);
      return result;
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return [{ isLoading, isSuccessful, error }, callback];
};
