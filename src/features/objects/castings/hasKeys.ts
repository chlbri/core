import type { Keys } from '#types';

const fn = <K extends Keys[]>(
  object: object,
  ...keys: K
): object is Record<K[number], unknown> => {
  return keys.every(key => key in object);
};

export default fn;
