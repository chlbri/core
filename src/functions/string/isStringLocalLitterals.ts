import { NUMBERS, STRINGS } from '../../constants';
import { StringLocalLitterals } from '../../types/strings';

export function isStringLocalLitterals(
  val: unknown,
): val is StringLocalLitterals {
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
