import { expandFn } from '#utils/expandFn';
import add from './add';
import contains from './contains';
import email from './email';
import endsWith from './endsWith';
import getLength from './getLength';
import includes from './includes';
import _index from './index';
import instance from './instance';
import join from './join';
import letters from './letters/all';
import splitBy from './splitBy';
import startsWith from './startsWith';
import toLowerCase from './toLowerCase';
import toUpperCase from './toUpperCase';

export const typings = expandFn(_index, {
  add,
  contains,
  email,
  endsWith,
  getLength,
  includes,
  instance,
  join,
  letters,
  splitBy,
  startsWith,
  toLowerCase,
  toUpperCase,
});
