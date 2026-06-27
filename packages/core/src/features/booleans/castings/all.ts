import { castFn } from '#utils/castFn';
import _false from './false';
import _index from './index';
import _true from './true';
import type from './type';

export const castings = castFn<boolean>()({
  is: _index,
  type,
  true: _true,
  false: _false,
});
