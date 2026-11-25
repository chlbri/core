import { expandFn } from '#utils/expandFn';

/**
 * Computes the integer base-10 logarithm of a number.
 *
 * @param value - Number whose logarithm is computed.
 * @returns The largest integer less than or equal to `log10(value)`.
 */
const _log10 = (value: number) => {
  return Math.floor(Math.log10(value));
};

/**
 * Computes the integer base-10 logarithm of a number.
 *
 * Built with {@linkcode expandFn}, adding a `toString` helper that renders a
 * value with leading zeros up to a target length.
 *
 * @param value - Number whose integer base-10 logarithm is computed.
 * @returns The largest integer less than or equal to `log10(value)`.
 * @see -- type {@linkcode FnBasic}
 */
export const log10 = expandFn(_log10, {
  /**
   * Formats a value with leading zeros up to a target length.
   *
   * @param _value - Value to render.
   * @param _len - Target length, defaults to `_value`.
   * @returns The zero-padded string.
   * @throws When `_value` or `_len` is below `1`, or when `_value` exceeds
   * `_len`.
   */
  toString: (_value: number, _len = _value) => {
    const check1 = _value < 1 || _len < 1;
    if (check1) throw new Error('-Infinity');

    const check2 = _value > _len;
    if (check2) {
      throw new Error(`Value ${_value} is greater than length ${_len}`);
    }

    const logLength = log10(_len);
    const logValue = log10(_value);
    const length = logLength - logValue;
    let out = '';
    Array.from({ length }).forEach(() => (out += '0'));
    out += _value;
    return out;
  },
});
