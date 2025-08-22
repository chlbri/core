import { expandFn } from '#utils/expandFn';
import any from './any';
import _const from './const';
import date from './date';
import defaulted from './defaulted';
import exclude from './exclude/all';
import extract from './extract/all';
import identity from './identity';
import _index from './index';
import keys from './keys';
import never from './never';
import neverify from './neverify';
import _null from './null';
import partial from './partial/all';
import primitive from './primitive/all';
import readonly from './readonly/all';
import required from './required/all';
import symbol from './symbol';
import _undefined from './undefined';
import undefiny from './undefiny';
import union from './union';
import unknown from './unknown';

const typings = expandFn(_index, {
  partial,
  const: _const,
  identity,
  unknown,
  neverify,
  any,
  required,
  readonly,
  primitive,
  symbol,
  date,
  undefiny,
  extract,
  exclude,
  union,
  null: _null,
  undefined: _undefined,
  never,
  keys,
  defaulted,
});

export default typings;
