const fn = (value: unknown): value is null | undefined => {
  return value === null || value === undefined;
};

export default fn;
