const stringCompareLengthLow = (a: string, b: string): number => {
  if (a.length === b.length) {
    return 0;
  }

  return a.length < b.length ? -1 : 1;
};

export default stringCompareLengthLow;
