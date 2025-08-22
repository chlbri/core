import type { KeyTypes } from '#types';
import { isPlainObject } from '#utils/is/object';

const is = (value: unknown): value is KeyTypes => {
  const isObject = isPlainObject(value);
  if (!isObject) return false;
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol'
  );
};

export default is;
