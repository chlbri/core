import type { Fn } from '#types';

const strict = <T extends any[] = any[], R = any>(
  fn: (value: Fn<T, R>) => boolean,
) => {
  return (value: unknown): value is Fn<T, R> =>
    typeof value === 'function' && fn(value as Fn<T, R>);
};

export default strict;
