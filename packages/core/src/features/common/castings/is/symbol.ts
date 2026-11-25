/**
 * Guard that checks whether a value is a `symbol`.
 *
 * @param value - Value to test.
 * @returns `true` when `value` is a `symbol`.
 */
const fn = (value: unknown): value is symbol => {
  return typeof value === 'symbol';
};

export default fn;
