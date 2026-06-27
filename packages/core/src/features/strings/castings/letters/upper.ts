import type { UpperLetters } from '#types';
import { castFn } from '#utils/castFn';
import is from './is';

const fn = castFn<UpperLetters>()({
  is: (value: unknown): value is UpperLetters => {
    return (
      typeof value === 'string' &&
      is(value) &&
      value === value.toUpperCase()
    );
  },
});

export default fn;
