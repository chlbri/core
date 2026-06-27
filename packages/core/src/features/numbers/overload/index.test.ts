import { createTests } from '@bemedev/vitest-extended';
import './index';

describe('NUMBERS OVERLOAD', () => {
  describe('#1 => number.percent', () => {
    const { acceptation, success } = createTests(
      (data: number) => data.percent,
    );

    describe('#1 => Acceptation', acceptation);

    describe(
      '#2 => Success',
      success(
        {
          expected: 0.1,
          parameters: 10,
          invite: '10.percent should return 0.1',
        },
        {
          expected: 0.5,
          parameters: 50,
          invite: '50.percent should return 0.5',
        },
        {
          expected: 1,
          parameters: 100,
          invite: '100.percent should return 1',
        },
      ),
    );
  });

  describe('#2 => number.percentS', () => {
    const { acceptation, success } = createTests(
      (data: number) => data.percentS,
    );

    describe('#1 => Acceptation', acceptation);

    describe(
      '#2 => Success',
      success(
        {
          expected: '10%',
          parameters: 10,
          invite: '10.percentS should return "10%"',
        },
        {
          expected: '50%',
          parameters: 50,
          invite: '50.percentS should return "50%"',
        },
        {
          expected: '100%',
          parameters: 100,
          invite: '100.percentS should return "100%"',
        },
      ),
    );
  });
});
