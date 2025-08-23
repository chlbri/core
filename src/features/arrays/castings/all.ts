import { expandFn } from '#utils/expandFn';
import dynamic from './dynamic';
import fn from './exclude';
import extract from './extract';
import forceCast from './forceCast';
import freeze from './freeze';
import _index from './index';
import indexes from './indexes';
import is from './is';
import _length from './length/all';
import low from './low';
import reduce from './reduce';
import reverse from './reverse';
import toArray from './toArray';
import tuple from './tuple/all';
import type from './type';

export const castings = expandFn(_index, {
  low,
  is,
  indexes,
  _length,
  tuple,
  reduce,
  toArray,
  reverse,
  freeze,
  extract,
  exclude: fn,
  forceCast,
  dynamic,
  type,
});
