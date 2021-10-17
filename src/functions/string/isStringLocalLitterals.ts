import { NUMBERS, STRINGS } from '../../Constants';
import { StringLocalLitterals } from '../../types/strings';

export function isStringLocalLitterals(
  val: any,
): val is StringLocalLitterals {
  // #region Checkers
  const all = [
    ...STRINGS.LETTERS,
    ...STRINGS.LETTERS.map((val) => val.toUpperCase()),
    ...NUMBERS.DIGITS.map((val) => '' + val),
    ...NUMBERS.DIGITS,
  ];
  // #endregion

  return all.includes(val);
}
