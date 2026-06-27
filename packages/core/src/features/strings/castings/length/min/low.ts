import isMinLength from './is';

const lowMinLength = (min: number, value: string) => {
  const bool = isMinLength(min, value);

  return {
    bool,
    value,
  };
};

export default lowMinLength;
