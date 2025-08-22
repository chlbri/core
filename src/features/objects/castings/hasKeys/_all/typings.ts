import { checkEntries } from '#features/objects/utils/entries';
import type { KeyTypes, KeyTypesFrom } from '#types';

const fn = <K extends KeyTypes>(
  object: object,
  keys: K,
): object is KeyTypesFrom<K> => {
  const check0 =
    Object.keys(object).every(key => key in keys) &&
    Object.keys(keys).every(key => key in object);

  if (!check0) return false;

  return checkEntries(keys, object);
};

export default fn;
