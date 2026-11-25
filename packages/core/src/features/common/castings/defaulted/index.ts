import runtime from './runtime';

/**
 * Default-value casting helper.
 *
 * Alias of the runtime implementation, which returns a fallback value when the
 * input is `null` or `undefined`.
 */
const fn = runtime;

export default fn;
