import { ENGLISH_LETTERS } from '#features/strings/constants';
import type { Letters } from '#types';

/**
 * Runtime type guard that detects strings made only of English letters.
 *
 * The value must be a non-empty string and every character, compared in
 * lowercase against {@linkcode ENGLISH_LETTERS}, must be an English letter, so
 * mixed-case words are accepted. Exposed as `is` on the `letters` helper of
 * the aggregated {@linkcode castings} helper.
 *
 * @param value - Value to test.
 * @returns `true` when `value` is a non-empty sequence of English letters,
 * otherwise `false`.
 */
const fn = (value: unknown): value is Letters => {
  if (typeof value !== 'string') return false;
  if (value.length === 0) return false;

  // Check if all characters are English letters
  for (const char of value.toLowerCase()) {
    if (!ENGLISH_LETTERS.includes(char as any)) {
      return false;
    }
  }
  return true;
};

export default fn;
