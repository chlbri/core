import { getAllIndexes } from './getIndexes';

export function getReferences<T extends readonly string[]>(
  args: T,
): { [key in T[number]]: number[] } {
  const names = new Set(args);
  const out: any = {};
  names.forEach(name => {
    const indexes = getAllIndexes(args, name);
    out[name] = indexes;
  });
  return out;
}
