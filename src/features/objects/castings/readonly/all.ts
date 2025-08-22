import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import _index from './index';
import is from './is';
import not from './not';

const fn = expandFn(_index, {
  forceCast,
  dynamic,
  is,
  not,
  deep,
});

export default fn;
