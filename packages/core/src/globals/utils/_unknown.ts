/**
 * Casts any value to `T` without validation or runtime conversion.
 *
 * @template T - Target type of the cast.
 * @param value - Value to return unchanged.
 * @returns The same value, typed as `T`.
 */
export const _unknown = <T>(value?: unknown) => value as T;
