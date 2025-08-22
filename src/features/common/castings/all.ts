import { castFn } from '#utils/castFn';
import clone from './clone';
import _const from './const';
import identity from './identity';
import _index from './index';
import partial from './partial/all';
import readonly from './readonly/all';
import required from './required/all';

export const castings = castFn<unknown>()({
  is: _index,
  identity,
  clone,
  const: _const,
  partial,
  readonly,
  required,
});
