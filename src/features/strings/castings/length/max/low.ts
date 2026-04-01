import isMaxLength from './is';

const lowMaxLength = (max: number, value: string) => {
  const bool = isMaxLength(max, value);

  return {
    bool,
    value,
  };
};

export default lowMaxLength;
