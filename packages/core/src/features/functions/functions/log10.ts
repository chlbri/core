import { expandFn } from '#utils/expandFn';

const _log10 = (value: number) => {
  return Math.floor(Math.log10(value));
};

export const log10 = expandFn(_log10, {
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
