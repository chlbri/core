const fn = <T extends object>(object: T): object is Required<T> => {
  const values = Object.values(object);
  return values.every(value => value !== undefined && value !== null);
};

export default fn;
