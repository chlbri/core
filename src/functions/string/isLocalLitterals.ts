import { NUMBERS, STRINGS } from '../../constants';
import { LocalLitterals } from '../../types/strings';

export function isLocalLitterals(val: unknown): val is LocalLitterals {
  // #region Checkers
  const all = [
    ...STRINGS.LETTERS,
    ...STRINGS.LETTERS.map(val => val.toUpperCase()),
    ...NUMBERS.DIGITS.map(val => '' + val),
    ...NUMBERS.DIGITS,
  ] as unknown[];
  // #endregion

  return all.includes(val);
}
