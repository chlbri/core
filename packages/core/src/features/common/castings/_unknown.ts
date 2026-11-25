import { _unknown } from '#utils/_unknown';

/**
 * Casting helper that types any value as a caller-chosen type.
 *
 * Alias of the typed identity that returns its argument unchanged at runtime
 * without validation or conversion.
 */
const fn = _unknown;

export default fn;
