/* eslint-disable @typescript-eslint/no-unused-vars */

import { expandFn } from '#utils/expandFn';
import {
  CUSTOM,
  PARTIAL,
  PRIMITIVE_OBJECTS,
  PRIMITIVES,
} from './constants';
import type { Custom, ObjectS, PartialCustom, TransformO } from './types';

const _transform = <T>(object?: any): T => {
  let out: any;

  const isArray = Array.isArray(object);
  if (isArray) {
    out = object.map(_transform);
    return out;
  }

  const isObject = typeof object === 'object';

  if (isObject) {
    out = {};

    const entries = Object.entries(object).filter(
      ([key]) => key !== PARTIAL,
    );
    if (entries.length === 0) return out;

    const isCustom = Object.keys(object).every(key => key === CUSTOM);

    if (isCustom) return out;

    entries.forEach(([key, value]) => {
      out[key] = _transform(value);
    });

    return out;
  }

  for (const primitive of PRIMITIVES) {
    if (object === primitive) return out;
  }

  for (const primitive of PRIMITIVE_OBJECTS.filter(
    value => value !== 'date',
  )) {
    if (object === primitive) {
      out = {};
      return out;
    }
  }

  return out;
};

export const transform = expandFn(
  <T extends ObjectS>(object?: T) => _transform<TransformO<T>>(object),
  {
    const: <const T extends ObjectS>(object?: T) => {
      return _transform<TransformO<T>>(object);
    },
    custom: <T = any>(_?: T): Custom<T> => {
      const out: any = {};
      out[CUSTOM] = undefined;
      return out;
    },
    partial: <T extends ObjectS>(value: T): T & PartialCustom => {
      const entries = Object.entries(value).filter(
        ([key]) => key !== PARTIAL,
      );
      const out: any = {};

      entries.forEach(([key, value]) => {
        out[key] = value;
      });

      out[PARTIAL] = undefined;

      return out;
    },

    tuple: <T extends ObjectS[]>(...els: T) => transform<T>(els),

    union: <T extends ObjectS[]>(..._: T) => transform<T[number]>(),
  },
);
