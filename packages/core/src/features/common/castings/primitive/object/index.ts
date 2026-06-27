import type { PrimitiveObject } from '#types';
import { castFn } from '#utils/castFn';

const fn = castFn<PrimitiveObject>()();

export default fn;
