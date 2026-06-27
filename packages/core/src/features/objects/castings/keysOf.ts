const fn = <T extends object>(object: T): (keyof T)[] => {
  return Object.keys(object) as any;
};

export default fn;
