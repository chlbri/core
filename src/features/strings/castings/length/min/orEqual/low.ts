import isMinOrEqualLength from './is';

const lowMinOrEqualLength = (min: number, value: string) => {
  const bool = isMinOrEqualLength(min, value);

  return {
    bool,
    value,
  };
};

export default lowMinOrEqualLength;
