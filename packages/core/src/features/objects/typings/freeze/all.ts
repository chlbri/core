import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import freeze from './index';
import is from './is';
import not from './not';

const freezeTyping = expandFn(freeze, {
  dynamic,
  forceCast,
  is,
  not,
  deep,
});

export default freezeTyping;
