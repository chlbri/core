/**
 * Signature of the internal object-based switch.
 *
 * @template T - Type of the selected value.
 */
type _SwitchValue_F = <T>(params: { condition?: boolean; truthy: T; falsy: T }) => T;

/**
 * Selects one of two values from an object descriptor.
 *
 * @param params - Condition and the two candidate values.
 * @returns `truthy` when the condition holds, otherwise `falsy`.
 * @see -- type {@linkcode _SwitchValue_F}
 */
const _switchValue: _SwitchValue_F = ({ condition, truthy, falsy }) => {
  const out = condition ? truthy : falsy;
  return out;
};

/**
 * Object form accepted by {@linkcode switchValue}.
 *
 * @template T - Type of the candidate values.
 */
type ParamsO<T> = { condition?: boolean; truthy: T; falsy: T };

/**
 * Array form accepted by {@linkcode switchValue}.
 *
 * @template T - Type of the candidate values.
 */
type ParamsA<T> = [condition: boolean, first: T, second: T];

/**
 * Returns `truthy` when the condition is truthy, otherwise `falsy`.
 *
 * @template T - Type of the selected value.
 * @param params - Condition and the two candidate values.
 * @param params.condition - Condition to evaluate.
 * @param params.truthy - Value returned when the condition is `true`.
 * @param params.falsy - Value returned when the condition is `false`.
 * @returns The selected value.
 * @see -- type {@linkcode ParamsO}
 */
export function switchValue<T>(params: ParamsO<T>): T;

/**
 * Positional variant of {@linkcode switchValue}.
 *
 * Accepts the condition followed by the truthy and falsy values.
 *
 * @template T - Type of the selected value.
 * @param args - Tuple of condition, truthy value and falsy value.
 * @returns The selected value.
 * @see -- type {@linkcode ParamsA}
 */
export function switchValue<T>(...args: ParamsA<T>): T;

export function switchValue<T>(condition: any, truthy?: T, falsy?: T) {
  const check1 = typeof condition === 'boolean';

  return _switchValue({
    condition: check1,
    truthy: _switchValue({ condition, truthy, falsy }),
    falsy: _switchValue(condition),
  });
}

/** Positional variant of {@linkcode switchValue}. */
switchValue.array = <T>(...params: ParamsA<T>) => switchValue(...params);
/** Object variant of {@linkcode switchValue}. */
switchValue.object = <T>(params: ParamsO<T>) => switchValue(params);

/**
 * Alias of {@linkcode switchValue}.
 */
export const switchV = switchValue;
