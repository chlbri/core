const fn = <T>(value: unknown): value is Array<T> => {
  return Array.isArray(value);
};

export default fn;
