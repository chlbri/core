export const PRIMITIVES = [
  "string",
  "number",
  "boolean",
  "void",
  "bigint",
  "symbol",
  "undefined",
  "null",
] as const;

export const PRIMITIVE_OBJECTS = ["date", "primitive"] as const;
export const OPTIONAL = "$$app-ts => optional$$" as const;
export const CUSTOM = "$$app-ts => custom$$" as const;
export const PARTIAL = "$$app-ts => partial$$" as const;
export const ARRAY = "$$app-ts => array$$" as const;
