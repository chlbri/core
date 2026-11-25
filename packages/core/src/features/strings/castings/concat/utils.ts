import { ArrayS, PossibleString } from '../../types';

/**
 * Concatenates values, inserting a separator between consecutive items.
 *
 * No separator is added before the first item or after the last one.
 *
 * @param sep - Separator inserted between items.
 * @param array - Values to concatenate.
 * @returns The concatenated string.
 */
const stringConcatUtil = (sep: PossibleString, ...array: ArrayS) => {
  let out = '';
  array.forEach((item, index) => {
    out += item;
    if (index < array.length - 1) out += sep;
  });
  return out;
};

export default stringConcatUtil;
