import { STATUS_STRINGS } from '../../constants/strings';
import { StatusString } from '../../types';
import { isOneOf } from './isOneOf';

export function isStatusString(value: string): value is StatusString {
  return isOneOf(STATUS_STRINGS, value);
}
