import { generateTests } from '../test';
import { identity } from './identity';
generateTests(identity, [[1], [2], [3], [4], ['true'], [false]], [1, 2, 3, 4, 'true', false]);
