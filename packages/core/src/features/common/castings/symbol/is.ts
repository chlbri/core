import { isTypeFn } from '#utils/is/_default';

/**
 * Guard checking whether a value is a `symbol`.
 *
 * Derived from {@linkcode isTypeFn} with `'symbol'`, it tests `typeof value`
 * and narrows the value to `symbol`. Exposed as `is` on the aggregated
 * `symbol` helper.
 */
const fn = isTypeFn('symbol');

export default fn;
