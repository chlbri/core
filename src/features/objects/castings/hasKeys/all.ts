import { expandFn } from '#utils/expandFn';
import all from './_all/all';
import _index from './index';
import typings from './typings';

const fn = expandFn(_index, {
  typings,
  all,
});

export default fn;
