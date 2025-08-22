import { typeFn } from '#utils/typeFn';
import dynamic from './dynamic';
import exclude from './exclude';
import extract from './extract';
import forceCast from './forceCast';
import freeze from './freeze';
import indexes from './indexes/all';
import is from './is';
import _length from './length';
import low from './low';
import reduce from './reduce/all';
import reverse from './reverse';
import toArray from './toArray';
import tuple from './tuple/all';
import type from './type';

export const typings = typeFn<Array<unknown>>()({
  low,
  is,
  indexes,
  _length,
  tuple,
  reduce,
  reverse,
  toArray,
  freeze,
  extract,
  exclude,
  forceCast,
  dynamic,
  type,
});
