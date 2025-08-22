import type { Primitive } from '#types';
import { castFn } from '#utils/castFn';

const fn = castFn<Primitive>()();

export default fn;
