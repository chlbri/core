import { typeFn } from '#utils/typeFn';
import _index from './index';
import type from './type';

export const typings = typeFn<object>()({
  is: _index,
  type,
});
