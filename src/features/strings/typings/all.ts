import { typeFn } from '#utils/typeFn';
import add from './add';
import contains from './contains';
import email from './email';
import endsWith from './endsWith';
import getLength from './getLength';
import includes from './includes';
import instance from './instance';
import join from './join';
import letters from './letters/all';
import splitBy from './splitBy';
import startsWith from './startsWith';
import toLowerCase from './toLowerCase';
import toUpperCase from './toUpperCase';

export const typings = typeFn<string>()({
  getLength,
  instance,
  startsWith,
  endsWith,
  includes,
  contains,
  toLowerCase,
  toUpperCase,
  letters,
  email,
  add,
  join,
  splitBy,
});
