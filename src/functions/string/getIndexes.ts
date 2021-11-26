export function getAllIndexes<T extends readonly string[]>(
  arr: T,
  val: string,
): number[] {
  const indexes: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      indexes.push(i);
    }
  }
  return indexes;
}
