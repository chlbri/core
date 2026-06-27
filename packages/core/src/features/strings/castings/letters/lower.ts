import type { LowerLetters } from '#types';
import { castFn } from '#utils/castFn';
import is from './is';

const fn = castFn<LowerLetters>()({
  is: (value: unknown): value is LowerLetters => {
    return (
      typeof value === 'string' &&
      is(value) &&
      value === value.toLowerCase()
    );
  },
});

export default fn;
