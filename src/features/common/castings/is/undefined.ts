const fn = (value: unknown): value is undefined => {
  return value === undefined;
};

export default fn;
