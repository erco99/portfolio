export const CATEGORIES = [
  "understanding",
  "write up",
  "finance"
] as const;

export type Category = (typeof CATEGORIES)[number];
