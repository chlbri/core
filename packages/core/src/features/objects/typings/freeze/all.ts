import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import freeze from './index';
import is from './is';
import not from './not';

/**
 * Aggregated type-level helpers for readonly objects.
 *
 * Uses {@linkcode expandFn} to extend the shallow readonly transform from
 * `./index` with:
 * - `dynamic`: exposes a readonly subtype as the produced value;
 * - `forceCast`: casts any value to `Readonly<T>`;
 * - `is`: checks whether an object type is readonly;
 * - `not`: removes `readonly` from every property;
 * - `deep`: the recursive variants, with their own `not`.
 *
 * Exposed as `freeze` on the aggregated {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const freezeTyping = expandFn(freeze, { dynamic, forceCast, is, not, deep });

export default freezeTyping;
