const fn = <T extends object>(object: T): [keyof T, T[keyof T]][] => {
  return Object.entries(object) as any;
};

export default fn;
