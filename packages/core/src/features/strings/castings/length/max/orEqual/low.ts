import isMaxOrEqualLength from './is';

const lowMaxOrEqualLength = (max: number, value: string) => {
  const bool = isMaxOrEqualLength(max, value);

  return {
    bool,
    value,
  };
};

export default lowMaxOrEqualLength;
