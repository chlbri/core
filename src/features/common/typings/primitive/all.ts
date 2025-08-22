import { expandFn } from 'globals';
import _index from './index';
import object from './object';

const fn = expandFn(_index, { object });

export default fn;
