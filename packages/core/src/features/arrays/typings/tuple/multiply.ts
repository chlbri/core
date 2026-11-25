import type { TupleOf } from '#types';
import { _unknown } from '#utils/_unknown';
import { expandFn } from '#utils/expandFn';

const fn = expandFn(
  /**
   * Type-level helper repeating a value into a tuple of a fixed length.
   *
   * Yields a tuple of `N` elements of type `T`, or the mutable array `T[]` when
   * `N` is the broad `number` type. Exposed as `number` on the `tuple` member
   * of the aggregated {@linkcode typings} helper.
   *
   * @template T - Element type repeated in the tuple.
   * @template N - Number of repetitions.
   * @param _ - Value used as the element type; ignored at runtime.
   * @param __ - Length used as the tuple size; ignored at runtime.
   * @returns The repeated tuple type; the runtime value is `undefined`.
   *
   * @see -- type {@linkcode TupleOf}
   */
  // oxlint-disable-next-line no-unused-vars
  <const T, N extends number>(_?: T, __?: N) => _unknown<TupleOf<T, N>>(),
  {
    /**
     * Builds a type-level check for the repeated tuple type.
     *
     * The returned function reports whether the type of its argument is
     * assignable to the repeated tuple, i.e. `TupleOf<U, N>`.
     *
     * @template U - Element type of the compared tuple.
     * @template N - Length of the compared tuple.
     * @param _ - Element type carrier; ignored at runtime.
     * @param __ - Length carrier; ignored at runtime.
     * @returns The checking function, yielding `true` or `false`.
     */
    // oxlint-disable-next-line no-unused-vars
    is: <const U, N extends number>(_?: U, __?: N) => {
      // oxlint-disable-next-line no-unused-vars
      const _out = <T>(_?: T) => _unknown<T extends TupleOf<U, N> ? true : false>();
      return _out;
    },
  },
);

export default fn;
