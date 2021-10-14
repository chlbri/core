export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export type PromisifyMethod<T> = T extends (...args: infer P) => infer R
  ? R extends Promise<any>
    ? T
    : (...args: P) => Promise<R>
  : never;

export type PromisifyObject<T extends object> = T & {
  [P in keyof T & string as PromisifyMethod<T[P]> extends never
    ? never
    : `${P}Async`]: PromisifyMethod<T[P]>;
};
