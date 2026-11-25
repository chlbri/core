import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import readonly from './index';
import is from './is';
import not from './not/all';
import type_ from './type';

/**
 * Object typing helper that makes a type readonly.
 *
 * Extends the base `readonly` typing with the `forceCast`, `dynamic`, `type`,
 * `is`, `not` and `deep` variants, reachable from `typings.readonly`. The
 * export only describes type transformations and evaluates to `undefined` at
 * runtime.
 *
 * @see {@linkcode expandFn}
 */
const _readonly = expandFn(readonly, {
  forceCast,
  dynamic,
  type: type_,
  is,
  not,
  deep,
});

export default _readonly;
