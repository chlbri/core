import { NUMBERS, STRINGS } from '../../constants';
export function isStringLocalLitterals(val) {
    // #region Checkers
    const all = [
        ...STRINGS.LETTERS,
        ...STRINGS.LETTERS.map(val => val.toUpperCase()),
        ...NUMBERS.DIGITS.map(val => '' + val),
        ...NUMBERS.DIGITS,
    ];
    // #endregion
    return all.includes(val);
}
