import type { Defaulted, NonN } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Chooses between the inferred types `T` and `U` at the type level.
 *
 * Yields `U` when `T` may be `undefined`, `null` or `never`, and keeps `T`
 * otherwise, following type {@linkcode Defaulted}.
 *
 * @template T - Base type under test.
 * @template U - Fallback type, constrained to type {@linkcode NonN} of `T`.
 * @param _ - Value whose type is captured as `T`; ignored at runtime.
 * @param __ - Value whose type is captured as `U`; ignored at runtime.
 * @returns An `undefined` value typed as type {@linkcode Defaulted} of `T` and
 * `U`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T, U extends NonN<T>>(_?: T, __?: U) => _unknown<Defaulted<T, U>>();

export default fn;
