import type { Fn } from "#types";
import type {
  parse,
  NumberSchema,
  BaseSchema,
  BaseIssue,
  Config,
  InferIssue,
} from "valibot";

import { PartDiff, Parts } from "./types";

type Bs = BaseSchema<unknown, unknown, BaseIssue<unknown>>;
type Co<T extends Bs = Bs> = Config<InferIssue<T>>;

type Pa1 = Parts<[1, 2, 3]>;
expectTypeOf<Pa1>().toEqualTypeOf<
  readonly [1, 2, 3] | readonly [1, 2] | readonly [1] | readonly []
>();

type Pa2 = Parts<readonly [1, 2, 3]>;
expectTypeOf<Pa2>().toEqualTypeOf<
  readonly [1, 2, 3] | readonly [1, 2] | readonly [1] | readonly []
>();

type Pa3 = Parts<readonly [1, 2, 3, "a", true, { a: 1 }]>;
expectTypeOf<Pa3>().toEqualTypeOf<
  | readonly []
  | readonly [1]
  | readonly [1, 2]
  | readonly [1, 2, 3]
  | readonly [
      1,
      2,
      3,
      "a",
      true,
      {
        a: 1;
      },
    ]
  | readonly [1, 2, 3, "a"]
  | readonly [1, 2, 3, "a", true]
>();

type Fn1 = Fn<[number, string, boolean], void>;
type Pa4 = Parts<Parameters<Fn1>>;
expectTypeOf<Pa4>().toEqualTypeOf<
  | readonly []
  | readonly [number]
  | readonly [number, string]
  | readonly [number, string, boolean]
>();

type Pa5 = Parts<Parameters<typeof parse>>;
expectTypeOf<Pa5>().toEqualTypeOf<
  | readonly []
  | readonly [Bs]
  | readonly [Bs, unknown]
  | readonly [Bs, unknown, _?: Co]
>();

type NumS = NumberSchema<undefined>;

type Pa6 = Parts<Parameters<typeof parse<NumS>>>;
expectTypeOf<Pa6>().toEqualTypeOf<
  | readonly []
  | readonly [NumS]
  | readonly [NumS, unknown]
  | readonly [NumS, unknown, _?: Co<NumS>]
>();

type Di1 = PartDiff<[1, 2, 3], [1]>;
expectTypeOf<Di1>().toEqualTypeOf<readonly [2, 3]>();

type Di2 = PartDiff<readonly [1, 2, 3], [1]>;
expectTypeOf<Di2>().toEqualTypeOf<readonly [2, 3]>();

type Di3 = PartDiff<[1, 2, 3], readonly [1, 2]>;
expectTypeOf<Di3>().toEqualTypeOf<readonly [3]>();

type Di4 = PartDiff<Parameters<Fn1>, [number]>;
expectTypeOf<Di4>().toEqualTypeOf<readonly [string, boolean]>();

type Di5 = PartDiff<[number, data: boolean | undefined], [number]>;
expectTypeOf<Di5>().toEqualTypeOf<readonly [data: boolean | undefined]>();
