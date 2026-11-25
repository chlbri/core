import type { AllowedNames, Ru, SubType } from '#types';
import type { Fn } from '../types';

/**
 * Keys of `T` whose values extend the type {@linkcode Fn}.
 *
 * @template T - Object inspected for function-valued properties.
 */
type KeysFn<T extends object = object> = keyof SubType<T, Fn>;

/**
 * Signature of {@linkcode refunction}.
 *
 * @template T - Object owning the method.
 * @template FnKey - Function-valued key of `T`.
 */
type Refunction_F = <
  T extends Ru = Ru,
  FnKey extends KeysFn<T> = AllowedNames<T, Fn>,
>(
  object: T,
  fn: FnKey,
) => T[FnKey];

/**
 * Extracts a method from an object and binds it to that object.
 *
 * The returned function forwards all arguments to the extracted method with
 * `this` bound to the original object.
 *
 * @param object - Object owning the method.
 * @param fn - Function-valued key to extract.
 * @returns The method bound to `object`.
 * @see -- type {@linkcode Refunction_F}
 */
export const refunction: Refunction_F = (object, fn) => {
  const _fn = object[fn];
  const out: any = (...args: any) => (_fn as Fn).bind(object)(...args);
  return out;
};
