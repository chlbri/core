import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(object: unknown) => {
  const out = Object.freeze(object);
  return _unknown<Readonly<T>>(out);
};

export default fn;
