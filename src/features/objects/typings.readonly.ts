/* eslint-disable @typescript-eslint/no-unused-vars */

import type { DeepNotReadonly, DeepReadonly, NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';
import { expandFn } from '#utils/expandFn';

export const _readonly = expandFn(
  <T extends object>(_?: T) => _unknown<Readonly<T>>(),
  {
    forceCast: <T extends object>(_?: unknown) => _unknown<Readonly<T>>(),

    dynamic: <T extends Readonly<T>>(_?: T) => _unknown<T>(),

    type: _unknown<Readonly<object>>(),

    is: <T extends object>(_?: T) =>
      _unknown<T extends Readonly<T> ? true : false>(),

    not: expandFn(
      <const T extends object>(_?: T) => _unknown<NotReadonly<T>>(),
      {
        is: <const T extends object>(_?: T) =>
          _unknown<T extends NotReadonly<T> ? true : false>(),
      },
    ),

    deep: expandFn(
      <T extends object>(_?: T) => _unknown<DeepReadonly<T>>(),
      {
        not: expandFn(
          <const T extends object>(_?: T) =>
            _unknown<DeepNotReadonly<T>>(),
          {
            is: <const T extends object>(_?: T) =>
              _unknown<T extends DeepNotReadonly<T> ? true : false>(),
          },
        ),

        is: <T extends object>(_?: T) =>
          _unknown<T extends DeepReadonly<T> ? true : false>(),
      },
    ),
  },
);
