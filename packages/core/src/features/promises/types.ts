/**
 * Promisified counterpart of a function type.
 *
 * A type matching `(...args: P) => R` keeps its original signature when `R`
 * already is a `Promise`, and otherwise becomes `(...args: P) => Promise<R>`.
 * Any non-function type resolves to `never`.
 *
 * @template T - Type inspected to derive the promisified variant.
 */
export type PromisifyMethod<T> = T extends (...args: infer P) => infer R
  ? R extends Promise<any>
    ? T
    : (...args: P) => Promise<R>
  : never;

/**
 * Object type augmented with an `Async`-suffixed counterpart of each method.
 *
 * Every key `P` whose type {@linkcode PromisifyMethod} resolves to `never`
 * (that is, every non-callable member) is dropped from the mapped part, while
 * callable members are re-keyed as `${P}Async` and typed with the promisified
 * signature. The original `T` is intersected so the synchronous members remain
 * available.
 *
 * @template T - Object type whose methods are promisified.
 */
export type PromisifyObject<T extends Record<string, unknown>> = T & {
  [
    P in keyof T as PromisifyMethod<T[P]> extends never
      ? never
      : `${string & P}Async`
  ]: PromisifyMethod<T[P]>;
};
