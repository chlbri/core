import { createTests } from '@bemedev/dev-utils/vitest-extended';
import { switchV } from './switch';

describe('switchValue', () => {
  const { acceptation, success } = createTests(switchV as any);

  describe('#00 Acceptation', acceptation);

  describe(
    '#01 Success',
    success(
      {
        invite: 'Object with true condition',
        parameters: {
          condition: true,
          truthy: 'yes',
          falsy: 'no',
        },
        expected: 'yes',
      },
      {
        invite: 'Object with false condition',
        parameters: {
          condition: false,
          truthy: 1,
          falsy: 0,
        },
        expected: 0,
      },
      {
        invite: 'Direct parameters with true',
        parameters: [true, 'enabled', 'disabled'],
        expected: 'enabled',
      },
      {
        invite: 'Direct parameters with false',
        parameters: [false, 'on', 'off'],
        expected: 'off',
      },
    ),
  );
});
