const fn = (value: unknown): value is symbol => {
  return typeof value === 'symbol';
};

export default fn;
