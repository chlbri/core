import { expandFn } from '#utils/expandFn';
import by from './by';
import deep from './deep/all';
import pick from './index';

const pickTyping = expandFn(pick, {
  by,
  deep,
});

export default pickTyping;
