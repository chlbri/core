import { expandFn } from '#utils/expandFn';
import byKey from './byKey';
import entries from './entries';
import freeze from './freeze/all';
import hasKeys from './hasKeys';
import _index from './index';
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

/**
 * Aggregated runtime helpers for object values.
 *
 * Extends the identity object cast from `./index` through {@linkcode expandFn}
 * and attaches:
 * - `trueObject`: identity cast restricted to type {@linkcode To} with a
 *   plain-object guard;
 * - `type`: the global `Object` constructor;
 * - `keys`: typed `Object.keys` reader;
 * - `values`: typed `Object.values` reader;
 * - `entries`: typed `Object.entries` reader;
 * - `byKey`: property accessor by key;
 * - `hasKeys`: guard checking that all provided keys exist;
 * - `omit` and `pick`: shallow and deep removal/selection helpers;
 * - `reverse`: swaps keys and values of a record;
 * - `readonly`, `freeze`, `require`: type-modifier casts;
 * - `ru` and `ra`: identity casts to type {@linkcode Ru} and type {@linkcode Ra};
 * - `primitive`: cast to a primitive-valued object with a guard;
 * - `noExtra`: identity cast restricted to a schema without extra keys;
 * - `forceCast`: unchecked cast to `object`;
 * - `dynamic`: identity cast keeping the object type.
 *
 * Mirrors the type-level {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
export const castings = expandFn(_index, {
  trueObject,
  type,
  keys,
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
  noExtra,
});
