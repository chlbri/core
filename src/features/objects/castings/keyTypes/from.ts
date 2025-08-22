import type { KeyTypes, KeyTypesFrom } from '#types';
import { castFn } from '#utils/castFn';

const fn = <T extends KeyTypes>(keyType: T) => {
  return castFn<KeyTypesFrom<T>>()({
    is: (value: unknown): value is KeyTypesFrom<T> => {
      return typeof value === (keyType as unknown as string);
    },
  });
};

export default fn;
