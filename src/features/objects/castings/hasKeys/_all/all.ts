import { expandFn } from '#utils/expandFn';
import _index from './index';
import typings from './typings';

const fn = expandFn(_index, {
  typings,
});

export default fn;
