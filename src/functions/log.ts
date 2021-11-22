export function log<T extends any>(name: string, data: T): void {
  return console.log(name, '=>', JSON.stringify(data, null, 2));
}
