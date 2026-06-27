const fn = <T extends object>(object: T): T[keyof T][] => {
  return Object.values(object) as any;
};

export default fn;
