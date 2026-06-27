import tuple from './tuple';

const fn = <const T extends any[]>(...args: T) =>
  Object.freeze(tuple(...args));

export default fn;
