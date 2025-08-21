import { expandFn } from '#utils/expandFn';

export const mergeIs = expandFn(
  <const T extends unknown[]>(...checks: T) => {
    return (value: unknown): value is T[number] => {
      return checks.some(check => value === check);
    };
  },
  {
    type: <const T extends unknown[]>(...checks: T) => {
      return (value: unknown): value is T[number] => {
        return checks.some(check => typeof value === check);
      };
    },
  },
);
