import { expandFn } from 'globals';
import { DEFAULT_DELIMITER } from '../constants';
import add from './add';
import contains from './contains';
import endsWith from './endsWith';
import getLength from './getLength';
import includes from './includes';
import _index from './index';
import instance from './instance';
import is from './is';
import join from './join';
import letters from './letters/all';
import splitBy from './splitBy';
import startsWith from './startsWith';
import toLowerCase from './toLowerCase';
import toUpperCase from './toUpperCase';
import type from './type';

export const castings = expandFn(_index, {
  is,
  instance,
  type,
  getLength,
  startsWith,
  endsWith,
  includes,
  contains,
  toLowerCase,
  toUpperCase,
  letters,
  add,
  join,
  splitBy,
  DEFAULT_DELIMITER,
});
