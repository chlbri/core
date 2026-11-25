/**
 * Checks whether a value is a plain object.
 *
 * A plain object has the `[object Object]` tag and a constructor named
 * `Object`, which excludes arrays, dates, class instances and `null`.
 *
 * @param value - Value to inspect.
 * @returns `true` when `value` is a plain object.
 */
export const isPlainObject = (value?: any): value is object => {
  return (
    Object.prototype.toString.call(value) == '[object Object]' &&
    value.constructor &&
    value.constructor.name == 'Object'
  );
};
