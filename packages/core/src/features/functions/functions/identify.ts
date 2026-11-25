import type { Identitfy } from '#types';

/**
 * Signature of {@linkcode identify}.
 *
 * Accepts a record of values keyed by identifier and returns each value
 * augmented with its key as `__id`.
 *
 * @template T - Type of the record values.
 */
type Identify_F = <const T>(arg?: Record<string, T>) => Identitfy<T>[];

/**
 * Converts a record of values into an array of identified values.
 *
 * Each entry is spread and receives a `__id` property holding its key. Returns
 * an empty array when `arg` is not provided.
 *
 * @param arg - Record mapping identifiers to values.
 * @returns The identified values.
 * @see -- type {@linkcode Identify_F}
 */
export const identify: Identify_F = arg => {
  if (!arg) return [];
  const entries = Object.entries(arg);

  const out: any[] = entries.map(([__id, value]) => {
    const out2 = { ...value, __id };
    return out2;
  });

  return out;
};
