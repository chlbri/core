import { checkEntries } from '#features/objects/utils/entries';
import type { KeyTypes, KeyTypesFrom } from '#types';

const fn = <K extends KeyTypes>(
  object: object,
  keys: K,
): object is KeyTypesFrom<K> => {
  return checkEntries(keys, object);
};

export default fn;
