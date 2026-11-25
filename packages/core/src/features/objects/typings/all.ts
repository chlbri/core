import { typeFn } from '#utils/typeFn';
import byKey from './byKey';
import entries from './entries';
import freeze from './freeze/all';
import hasKeys from './hasKeys';
import keyTypes from './keyTypes';
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
import noExtra from './noExtra';

/**
 * Aggregated type-level helpers for objects.
 *
 * Built with {@linkcode typeFn}, which supplies the main call signature and the
 * `forceCast`, `dynamic`, `is` and `type` members, and extended with:
 * - `trueObject`: plain object types that are neither iterable nor carry the
 *   `SymbolConstructor` property;
 * - `keys`, `values` and `entries`: key, value and entry types, with a `union`
 *   variant for `keys` and `values`;
 * - `byKey`: the type of the value stored under a given key;
 * - `keyTypes`: the expected type of every key;
 * - `hasKeys`: checks that candidate keys belong to the object type;
 * - `omit` and `pick`: remove or keep keys, with `const`, `is`, `by` and
 *   `deep` variants;
 * - `reverse`: swaps keys and values;
 * - `readonly`, `freeze` and `require`: readonly and required variants, with
 *   `is`, `not`, `deep` and `strict` members;
 * - `ru`, `rn` and `ra`: records of `unknown`, `never` and `any`;
 * - `primitive`: nested primitive object types;
 * - `noExtra`: validates a value against a schema without extra keys.
 *
 * @see -- type {@linkcode FnBasic}
 */
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
  noExtra,
});
