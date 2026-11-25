import type { ReverseArray, RuA } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Returns a reversed copy of the given values.
 *
 * Slices the arguments before reversing them, so the input is not mutated, and
 * narrows the result to type {@linkcode ReverseArray}`<T>`. Mirrors the
 * `reverse` helper of the type-level {@linkcode typings} aggregate.
 *
 * @template T - Tuple type to reverse.
 * @param args - Values to reverse.
 * @returns New tuple with the elements in reverse order.
 */
const fn = <T extends RuA>(...args: T) => {
  const out = args.slice().reverse();
  return _unknown<ReverseArray<T>>(out);
};

export default fn;
