import { generateTests } from '../test';
import { log } from './log';
generateTests(log, [[1], [2], [3, 4], ['true'], [false]], [undefined, undefined, undefined, undefined, undefined]);
