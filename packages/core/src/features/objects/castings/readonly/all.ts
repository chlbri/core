import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import _index from './index';
import is from './is';
import not from './not';

/**
 * Aggregated runtime helpers for readonly casts.
 *
 * Extends the freezing readonly cast from `./index` through
 * {@linkcode expandFn} with:
 * - `forceCast`: freezes any value and asserts a readonly type;
 * - `dynamic`: freezes an object whose type is inferred from the argument;
 * - `is`: runtime guard based on `Object.isFrozen`;
 * - `not`: type-only cast removing the `readonly` modifier;
 * - `deep`: recursive readonly helpers, including their own `not` variant.
 *
 * Exposed as `readonly` on the aggregated {@linkcode castings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { forceCast, dynamic, is, not, deep });

export default fn;
