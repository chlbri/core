import { expandFn } from '#utils/expandFn';
import any from './any';
import _const from './const';
import date from './date';
import defaulted from './defaulted';
import exclude from './exclude/all';
import extract from './extract/all';
import identity from './identity';
import _index from './index';
import keys from './keys';
import never from './never';
import neverify from './neverify';
import _null from './null';
import partial from './partial/all';
import primitive from './primitive/all';
import readonly from './readonly/all';
import required from './required/all';
import symbol from './symbol';
import _undefined from './undefined';
import undefiny from './undefiny';
import union from './union';
import unknown from './unknown';

/**
 * Aggregated type-level helpers for primitive and miscellaneous types.
 *
 * Extends the base `unknown` typing function from `./index` with:
 * - `partial`, `required` and `readonly`: object modifier helpers;
 * - `const` and `identity`: capture a value's type, literally or inferred;
 * - `unknown`, `any`, `never`, `null`, `undefined`, `symbol`, `date`, `keys`
 *   and `primitive`: helpers for the matching built-in types;
 * - `neverify`: tests whether a type is `never`;
 * - `undefiny`: widens a type with `undefined`;
 * - `extract` and `exclude`: filter a type by candidate types;
 * - `union`: turns the elements of a tuple into a union;
 * - `defaulted`: selects a fallback type when the base type is nullable.
 *
 * @see -- type {@linkcode FnBasic}
 */
export const typings = expandFn(_index, {
  partial,
  const: _const,
  identity,
  unknown,
  neverify,
  any,
  required,
  readonly,
  primitive,
  symbol,
  date,
  undefiny,
  extract,
  exclude,
  union,
  null: _null,
  undefined: _undefined,
  never,
  keys,
  defaulted,
});
