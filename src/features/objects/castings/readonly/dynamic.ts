const fn = <U extends object>(object: U) => {
  return Object.freeze(object);
};

export default fn;
