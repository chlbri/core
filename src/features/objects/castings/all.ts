import { castFn } from '#utils/castFn';
import byKey from './byKey';
import entries from './entries';
import freeze from './freeze';
import hasKeys from './hasKeys/all';
import is from './is';
import keysOf from './keysOf';
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

export const castings = castFn<object>()({
  trueObject,
  is,
  type,
  keysOf,
  values,
  entries,
  byKey,
  hasKeys,
  omit,
  reverse,
  readonly,
  freeze,
  require,
  pick,
  ru,
  ra,
  primitive,
});
