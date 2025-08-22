import type { Letters } from '#types';
import { castFn } from '#utils/castFn';

const fn = castFn<Letters>()();

export default fn;
