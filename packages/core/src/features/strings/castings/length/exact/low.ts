import isExactLength from './is';

const lowExactLength = (length: number, value: string) => {
  const bool = isExactLength(length, value);

  return {
    bool,
    value,
  };
};

export default lowExactLength;
