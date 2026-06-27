import { expandFn } from '#utils/expandFn';
import _index from './index';
import object from './object';

const fn = expandFn(_index, { object });

export default fn;
