import { createTests } from '@bemedev/vitest-extended';
import { identity } from './identity';

const useTests = createTests(identity);

useTests(
  ['1', [1], 1],
  ['2', [2], 2],
  ['str', ['str'], 'str'],
  ['boolean', [true], true],
);
