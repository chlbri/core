/* eslint-disable @typescript-eslint/no-unused-vars */

import type { KeyTypes, KeyTypesFrom } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <K extends KeyTypes>(_?: K) => {
  const _out = <T extends object>(_?: T) =>
    _unknown<T extends KeyTypesFrom<K> ? true : false>();

  return _out;
};

export default fn;
