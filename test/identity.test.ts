import { identity } from '../src/functions/identity';
import { generateTests } from './config';

describe('identity', () => {
  (() =>
    describe('functions/identity', () => {
      generateTests(
        identity,
        [[1], [2], [3], [4], ['true'], [false]],
        [1, 2, 3, 4, 'true', false],
      );
    }))();
});
