import { STATUS_STRINGS } from '../../constants/strings';
import { isS } from './isS';
export function isStatusString(value) {
    return isS(STATUS_STRINGS, value);
}
