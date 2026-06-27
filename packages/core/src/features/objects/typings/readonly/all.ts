import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import readonly from './index';
import is from './is';
import not from './not/all';
import type_ from './type';

const _readonly = expandFn(readonly, {
  forceCast,
  dynamic,
  type: type_,
  is,
  not,
  deep,
});

export default _readonly;
