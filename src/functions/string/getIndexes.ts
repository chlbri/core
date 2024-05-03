export function getAllIndexes<T extends readonly string[]>(
  valueToSearch: string,
  ...arr: T
): number[] {
  const indexes: number[] = [];
  arr.forEach((curent, index) => {
    if (curent === valueToSearch) indexes.push(index);
  });
  return indexes;
}

export function getAllIndexesString<T extends string>(
  str: T,
  valueToSearch: string,
): number[] {
  const indexes: number[] = [];
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    if (current === valueToSearch) {
      indexes.push(i);
    }
  }
  return indexes;
}
