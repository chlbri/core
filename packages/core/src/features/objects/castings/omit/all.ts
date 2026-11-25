import { expandFn } from '#utils/expandFn';
import by from './by/all';
import _const from './const/all';
import deep from './deep/all';
import _index from './index';
import is from './is';
import strict from './strict/all';

/**
 * Aggregate `omit` helper.
 *
 * The callable base removes entries whose keys are listed, and the helper is
 * extended with the `strict`, `const`, `is`, `by` and `deep` members. Together
 * they cover key-based, value-based, deep, strict and constant-preserving
 * omission, plus a predicate form.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(_index, { strict, const: _const, is, by, deep });

export default fn;
