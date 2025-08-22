import { expandFn } from '#utils/expandFn';
import const_ from './const';
import exclude from './index';

const excludeTyping = expandFn(exclude, {
  const: const_,
});

export default excludeTyping;
