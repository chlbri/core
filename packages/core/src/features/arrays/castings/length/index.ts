import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Returns the number of elements of the given values.
 *
 * Reads `array.length` at runtime and narrows it to the literal tuple length
 * `T['length']`. Mirrors the `_length` helper of the type-level
 * {@linkcode typings} aggregate.
 *
 * @template T - Tuple (or readonly array) whose length is read.
 * @param array - Values whose count is returned.
 * @returns Length of `array`, typed as `T['length']`.
 */
const fn = <T extends RuA>(...array: T) => {
  const out = array.length;
  return _unknown<T['length']>(out);
};

export default fn;
