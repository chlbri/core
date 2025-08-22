const fn = <U extends string[]>(
  value: unknown,
  ...segments: U
): value is `${string}${U[number]}${string}` => {
  if (typeof value !== 'string') return false;

  // Check if the string contains any of the segments
  for (const seg of segments) {
    if (value.includes(seg)) {
      return true;
    }
  }
  return false;
};

export default fn;
