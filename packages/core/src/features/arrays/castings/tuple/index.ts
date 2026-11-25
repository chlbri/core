import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Identity tuple cast that preserves the argument tuple.
 *
 * Returns the arguments unchanged and keeps their tuple type `T`, so tuple
 * literals survive the call. Mirrors the `tuple` helper of the type-level
 * {@linkcode typings} aggregate.
 *
 * @template T - Readonly tuple type preserved by the cast.
 * @param args - Values of the tuple.
 * @returns Tuple holding `args`, typed as `T`.
 */
const fn = <const T extends RuA>(...args: T) => {
  const out = args;
  return _unknown<T>(out);
};

export default fn;
