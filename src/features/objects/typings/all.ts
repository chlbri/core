import { typeFn } from '#utils/typeFn';
import byKey from './byKey';
import entries from './entries';
import freeze from './freeze/all';
import hasKeys from './hasKeys/all';
import keyTypes from './keyTypes/all';
import keys from './keysOf';
import omit from './omit/all';
import pick from './pick/all';
import primitive from './primitive';
import ra from './ra';
import readonly from './readonly/all';
import require from './require/all';
import reverse from './reverse';
import rn from './rn';
import ru from './ru';
import trueObject from './trueObject';
import values from './values';

export const typings = typeFn<object>()({
  trueObject,
  keys,
  values,
  entries,
  byKey,
  keyTypes,
  hasKeys,
  omit,
  pick,
  reverse,
  readonly,
  freeze,
  require,
  ru,
  rn,
  ra,
  primitive,
});
