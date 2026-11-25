import exclusive from './exclusive/all';
import inclusive from './inclusive/all';

/**
 * Groups the range-length helpers.
 *
 * Exposes the {@linkcode exclusive} and {@linkcode inclusive} variants, each of
 * which carries its own `is`, `low` and `strict` helpers for bounds checking.
 */
const rangeAllLength = { exclusive, inclusive };

export default rangeAllLength;
