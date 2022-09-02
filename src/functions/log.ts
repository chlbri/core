export function log<T>(name: string, data: T): void {
  return console.log(name, '=>', JSON.stringify(data, null, 2));
}
