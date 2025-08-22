import type { KeyTypes } from '#types';

const is = (value: unknown): value is KeyTypes => {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol'
  );
};

export default is;
