import type { Fn, FnBasic } from '../../features/functions/types';

/**
 * Attaches extra members to a function and returns the same function.
 *
 * The extensions are assigned in place with `Object.assign`, so the `main`
 * argument is mutated and identity is preserved. This is the primitive used to
 * build the `castFn` and `typeFn` helpers.
 *
 * @template Main - Type of the base function.
 * @template Tr - Type of the extension members.
 * @param main - Function to augment.
 * @param extensions - Members to attach to `main`.
 * @returns `main` typed as its own type intersected with `Tr`.
 * @see -- type {@linkcode FnBasic}
 */
export const expandFn = <Main extends Fn, const Tr extends object = object>(
  main: Main,
  extensions?: Tr,
): FnBasic<Main, Tr> => {
  const out: any = main;

  if (extensions) {
    Object.assign(out, extensions);
  }

  return out;
};
