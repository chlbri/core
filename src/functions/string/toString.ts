export function toString<T extends any[]>(...args: T): string[] {
  return args.map(val => val.toString());
}
