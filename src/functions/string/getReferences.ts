import { getAllIndexes } from './getIndexes';

export function getReferences<T extends readonly string[]>(args: T) {
  const names = new Set(args);
  const out: any = {};
  names.forEach(name => {
    const indexes = getAllIndexes(name, ...args);
    out[name] = indexes;
  });
  return out as { [key in T[number]]: number[] };
}
