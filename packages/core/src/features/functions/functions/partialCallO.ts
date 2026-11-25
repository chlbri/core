import { Fn } from '../types';
import { expandFn } from '#utils/expandFn';

/**
 * Signature of {@linkcode partialCallO}.
 *
 * Partially applies a function that takes a single object parameter, returning
 * a function that accepts the remaining properties.
 *
 * @template T - Properties supplied eagerly.
 * @template U - Full object parameter type.
 * @template R - Return type of the partially applied function.
 */
type _PartialCallO_F = <T extends object, U extends T, R>(
  f: Fn<[arg: U], R>,
  headArgs?: T,
) => Fn<[remainArgs: Omit<U, keyof T>], R>;

/**
 * Partially applies a single-object-parameter function without type tracking.
 *
 * @param f - Function taking one object argument.
 * @param headArgs - Properties supplied eagerly.
 * @returns Function accepting the remaining properties.
 */
const __partialCallO = (f: Fn<[arg: any], any>, headArgs?: object) => {
  return (remainArgs: object) => {
    const params = { ...remainArgs, ...headArgs } as any;
    return f(params);
  };
};

const _partialCallO: _PartialCallO_F = __partialCallO;

/**
 * Partially applies a function that takes a single object parameter.
 *
 * The supplied properties are merged with the remaining ones when the returned
 * function is called. `expandFn` attaches the `low` and `typed` variants.
 *
 * @see -- type {@linkcode _PartialCallO_F}
 */
export const partialCallO = expandFn(_partialCallO, {
  /**
   * Untyped base implementation.
   *
   * Use with caution, as it can lead to type inference issues. Prefer
   * {@linkcode partialCallO.typed} for better type safety.
   *
   * @param f - Function taking one object argument.
   * @param headArgs - Properties supplied eagerly.
   * @returns Function accepting the remaining properties.
   */
  low: __partialCallO,

  /**
   * Typed partial application for a single-object-parameter function.
   *
   * @param f - Function taking one object argument.
   * @param headArgs - Properties supplied eagerly.
   * @returns Function accepting the remaining properties.
   * @example
   * ```ts
   * const greet = ({ name, greeting }: { name: string; greeting: string }) =>
   *   `${greeting}, ${name}!`;
   * const greetHello = partialCallO.typed(greet, { greeting: 'Hello' });
   * greetHello({ name: 'Alice' }); // "Hello, Alice!"
   * ```
   */
  typed: _partialCallO,
});
