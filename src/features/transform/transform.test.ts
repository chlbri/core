import { tuple as _tuple } from './helpers';
import { transform } from './transform';

describe('TupleCustom typing', () => {
  it('#01 => should correctly transform TupleCustom types', () => {
    expect(_tuple('string', 'boolean')).toEqual(['string', 'boolean']);
  });

  test('#02 Complex =>', () => {
    const pC = transform(({ array, maybe, intersection }) => ({
      nodes: maybe(
        array(
          intersection(
            {
              position: {
                x: 'number',
                y: 'number',
              },
              data: {
                label: maybe('string'),
                content: 'string',
              },
              input: 'boolean',
            },
            { id: 'string' },
          ),
        ),
      ),
    }));

    expect(pC).toEqual({
      nodes: {
        '$$app-ts => array$$': {
          position: {},
          data: {},
        },
      },
    });
  });
});
