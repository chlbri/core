import { JSON_PATH } from '#scripts/constants';
import { getCodebase } from '#scripts/helpers';
import { lift as _lift } from '@bemedev/codebase';

type Props = {
  exceptions: string[];
};

export const lift = ({ exceptions }: Props) => {
  return _lift(getCodebase(), JSON_PATH, ...exceptions);
};
