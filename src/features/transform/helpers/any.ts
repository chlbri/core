import type { ObjectS } from "../types";

export const any = <T extends ObjectS = ObjectS>(value?: T) => value as T;
