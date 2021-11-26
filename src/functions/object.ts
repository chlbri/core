/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { dequal } from 'dequal';
import { isNullish } from '.';
import { compareShallowArray, isArray } from './array';

export function dataCompare(arg1: any, arg2: any): boolean {
  if (isNullish(arg2)) return true;
  if (typeof arg1 !== 'object' || typeof arg2 !== 'object') {
    return arg1 === arg2;
  }
  if (isArray(arg1) || isArray(arg2)) {
    return compareShallowArray(arg1, arg2);
  }

  const _arg2 = Object.entries({ ...arg2 })
    .filter(([, value]) => !isNullish(value))
    .reduce((prev, [key, value]) => {
      prev[key] = value;
      return prev;
    }, {} as any);

  const keys2 = Object.keys(_arg2);

  if (!keys2.length) {
    return true;
  }

  const _arg1 = Object.entries({ ...arg1 })
    .filter(([key]) => {
      return keys2.includes(key);
    })
    .reduce((prev, [key, value]) => {
      prev[key] = value;
      return prev;
    }, {} as any);

  return dequal(_arg1, _arg2);
}
