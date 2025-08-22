import type { UpperLetters } from '#types';
import { castFn } from '#utils/castFn';
import _index from './index';

const fn = castFn<UpperLetters>()({
  is: (value: unknown): value is UpperLetters => {
    return (
      typeof value === 'string' &&
      _index.is(value) &&
      value === value.toUpperCase()
    );
  },
});

export default fn;
