import { expandFn } from '#utils/expandFn';
import const_ from './const';
import require from './index';
import is from './is/all';
import strict from './strict';

/**
 * Aggregated type-level helpers for required object properties.
 *
 * Uses {@linkcode expandFn} to extend the intersection transform from
 * `./index` with:
 * - `const`: the same intersection, captured with `const` type parameters;
 * - `strict`: makes the keys of its second argument required;
 * - `is`: checks whether an object type already satisfies its required part.
 *
 * Exposed as `require` on the aggregated {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const requireTyping = expandFn(require, { const: const_, strict, is });

export default requireTyping;
