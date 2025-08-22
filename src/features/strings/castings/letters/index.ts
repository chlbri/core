import type { Letters } from '#types';
import { castFn } from '#utils/castFn';
import { ENGLISH_LETTERS } from '../../constants';

const fn = castFn<Letters>()({
  is: (value: unknown): value is Letters => {
    if (typeof value !== 'string') return false;
    if (value.length === 0) return false;

    // Check if all characters are English letters
    for (const char of value.toLowerCase()) {
      if (!ENGLISH_LETTERS.includes(char as any)) {
        return false;
      }
    }
    return true;
  },
});

export default fn;
