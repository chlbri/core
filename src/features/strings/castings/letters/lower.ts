import type { LowerLetters } from '#types';
import { castFn } from '#utils/castFn';
import _index from './index';

const fn = castFn<LowerLetters>()({
  is: (value: unknown): value is LowerLetters => {
    return (
      typeof value === 'string' &&
      _index.is(value) &&
      value === value.toLowerCase()
    );
  },
});

export default fn;
