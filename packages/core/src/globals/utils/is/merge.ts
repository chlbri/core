import { expandFn } from '#utils/expandFn';

/**
 * Builds a guard accepting any of the given values.
 *
 * The returned guard narrows the value to `T[number]` by strict equality against
 * each provided check. The {@linkcode expandFn} wrapper also attaches a `type`
 * variant that matches on `typeof` instead.
 *
 * @template T - Tuple of the accepted values.
 * @param checks - Values accepted by the generated guard.
 * @returns Guard narrowing the value to the union of `T`'s elements.
 */
export const mergeIs = expandFn(
  <const T extends unknown[]>(...checks: T) => {
    return (value?: unknown): value is T[number] => {
      return checks.some(check => value === check);
    };
  },
  {
    /**
     * Builds a guard accepting values whose `typeof` matches any of the given
     * strings.
     *
     * @template T - Tuple of the accepted `typeof` strings.
     * @param checks - `typeof` strings to compare against.
     * @returns Guard narrowing the value to the union of `T`'s elements.
     */
    type: <const T extends unknown[]>(...checks: T) => {
      return (value?: unknown): value is T[number] => {
        return checks.some(check => typeof value === check);
      };
    },
  },
);
