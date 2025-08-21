/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from '#utils/_unknown';

export const contains = <const T extends string, U extends string[]>(
  _?: T,
  ...__: U
) => _unknown<T extends `${string}${U[number]}${string}` ? true : false>();
