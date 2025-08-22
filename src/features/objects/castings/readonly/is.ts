const fn = <T>(object: T): object is Readonly<T> => {
  return Object.isFrozen(object);
};

export default fn;
