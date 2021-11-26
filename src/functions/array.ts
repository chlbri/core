import { TupleOf } from '../types';
import { isNullish } from './nullish';
import { dataCompare } from './object';

export function isArray<T>(value: unknown): value is Array<T> {
  return value instanceof Array;
}

export function sliceArray<T extends readonly any[], N extends number>(
  array: T,
  splicer: N,
): TupleOf<TupleOf<T[number], N>> {
  const arr = [...array];

  return new Array(Math.ceil(array.length / splicer))
    .fill(arr)
    .map(() =>
      arr.splice(0, splicer).map(val => (isArray(val) ? val[0] : val)),
    ) as TupleOf<TupleOf<T[number], N>>;
}

export function compareShallowArray(arg1?: any[], arg2?: any[]): boolean {
  if (isNullish(arg2) || isNullish(arg1)) {
    return true;
  }
  if (arg2.length > arg1.length) return false;
  let out = true;
  for (let index = 0; index < arg2.length; index++) {
    const el1 = arg1[index];
    const el2 = arg2[index];
    out = dataCompare(el1, el2);
    if (!out) {
      break;
    }
  }
  return out;
}
