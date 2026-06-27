const fn = (value: unknown): value is null => {
  return value === null;
};

export default fn;
