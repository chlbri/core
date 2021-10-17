export function log<T extends any[]>(...data: T): void {
  return console.log(...data);
}
