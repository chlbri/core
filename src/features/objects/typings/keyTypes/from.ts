/* eslint-disable @typescript-eslint/no-unused-vars */

import type { KeyTypes, KeyTypesFrom } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends KeyTypes>(_?: T) => _unknown<KeyTypesFrom<T>>();

export default fn;
