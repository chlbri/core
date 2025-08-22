import type { Checker } from '#types';
import { castFn } from '#utils/castFn';

const fn = castFn<Checker>()();

export default fn;
