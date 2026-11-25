/**
 * Reference to the global {@linkcode Array} constructor.
 *
 * Exposed as `type` on the aggregated {@linkcode castings} helper and provides
 * the runtime way to create arrays. Mirrors the `type` helper of the
 * type-level {@linkcode typings} aggregate, which names `unknown[]`.
 */
const fn = Array;

export default fn;
