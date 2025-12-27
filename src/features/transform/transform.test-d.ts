import { transform } from './transform';

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

expectTypeOf(pC).toEqualTypeOf<{
  nodes?: Array<{
    position: { x: number; y: number };
    data: { label?: string; content: string };
    input: boolean;
    id: string;
  }>;
}>();
