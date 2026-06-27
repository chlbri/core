const fn = <T extends object>(object: T, requires: object) => {
  return Object.assign(object, requires);
};

export default fn;
