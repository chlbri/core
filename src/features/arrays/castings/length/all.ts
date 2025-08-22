import { expandFn } from '#utils/expandFn';
import has from './has';
import _index from './index';

const fn = expandFn(_index, { has });

export default fn;
