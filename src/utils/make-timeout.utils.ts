export const makeTimeout = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
