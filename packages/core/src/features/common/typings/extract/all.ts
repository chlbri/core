import { expandFn } from '#utils/expandFn';
import const_ from './const';
import extract from './index';

const extractTyping = expandFn(extract, {
  const: const_,
});

export default extractTyping;
