import type { Keys } from '#types';
import { expandFn } from '#utils/expandFn';
import type { ObjectMapS, ObjectS } from '../types';

const union = <T extends [ObjectS, ObjectS, ...ObjectS[]]>(
  ...values: T
) => {
  return values[0] as T[number];
};

type Discriminated<K extends Keys> = ObjectMapS & Record<K, ObjectS>;

const fn = expandFn(union, {
  discriminated: <
    const K extends Keys,
    T extends [Discriminated<K>, Discriminated<K>, ...Discriminated<K>[]],
  >(
    _key: K,
    ...values: T
  ) => union(...values),
});

export default fn;
