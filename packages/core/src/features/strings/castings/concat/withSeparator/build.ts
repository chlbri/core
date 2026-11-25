import { partialCall } from '#features/functions/functions';
import { ArrayS, PossibleString, JoinString } from '../../../types';
import typed from './typed';

/**
 * Typed signature of the separator-bound concatenation builder.
 *
 * @template T - Type of the separator.
 * @see -- type {@linkcode JoinString}
 */
type StringConcatWithSeparatorBuild_F = <T extends PossibleString>(
  sep: T,
) => <A extends ArrayS>(...array: A) => JoinString<A, T>;

/**
 * Builds a concatenation function bound to a separator.
 *
 * Delegates to {@linkcode partialCall}, fixing `sep` as the first argument of
 * the typed concatenation function.
 *
 * @see -- type {@linkcode StringConcatWithSeparatorBuild_F}
 */
const stringConcatWithSeparatorBuild: StringConcatWithSeparatorBuild_F = sep =>
  partialCall.low(typed, sep);

export default stringConcatWithSeparatorBuild;
