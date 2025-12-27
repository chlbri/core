import { expandFn } from '#utils/expandFn';
import byKey from './byKey';
import entries from './entries';
import freeze from './freeze/all';
import hasKeys from './hasKeys/all';
import _index from './index';
import keyTypes from './keyTypes/all';
import keys from './keysOf';
import omit from './omit/all';
import pick from './pick/all';
import primitive from './primitive';
import ra from './ra';
import readonly from './readonly/all';
import require from './require/all';
import reverse from './reverse';
import ru from './ru';
import trueObject from './trueObject';
import type from './type';
import values from './values';
import noExtra from './noExtra';

export const castings = expandFn(_index, {
  trueObject,
  type,
  keys,
  values,
  entries,
  byKey,
  hasKeys,
  keyTypes,
  omit,
  reverse,
  readonly,
  freeze,
  require,
  pick,
  ru,
  ra,
  primitive,
  noExtra,
});
