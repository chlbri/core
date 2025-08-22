import type { Fn } from '#types';

const is = (value: unknown): value is Fn => {
  return typeof value === 'function';
};

export default is;
