import { expandFn } from '#utils/expandFn';
import _false from './false';
import forceCast from './forceCast';
import _index from './index';
import is from './is';
import _true from './true';
import type from './type';

export const typings = expandFn(_index, {
  forceCast,
  is,
  type,
  true: _true,
  false: _false,
});
