import { expandFn } from 'globals';
import _unknown from './_unknown';
import any from './any';
import clone from './clone';
import _const from './const';
import date from './date/all';
import defaulted from './defaulted/all';
import identity from './identity';
import _index from './index';
import is from './is/all';
import never from './never';
import neverify from './neverify';
import _null from './null';
import partial from './partial/all';
import primitive from './primitive/all';
import readonly from './readonly/all';
import required from './required/all';
import symbol from './symbol/all';
import _undefined from './undefined';
import undefiny from './undefiny';

export const castings = expandFn(_index, {
  partial,
  const: _const,
  identity,
  clone,
  unknown: _unknown,
  neverify,
  readonly,
  required,
  date,
  primitive,
  symbol,
  any,
  is,
  null: _null,
  undefined: _undefined,
  undefiny,
  never,
  defaulted,
});
