export type Fn<Args extends any[] = any[], R = any> = (...args: Args) => R;

export type FnBasic<Main extends Fn, Tr extends object> = Tr & Main;

export type Checker<T = unknown> =
  | ((value: unknown) => value is T)
  | Fn<[unknown], boolean>;
