const fn = <T extends object>(object: T) => {
  return Object.freeze(object);
};

export default fn;
