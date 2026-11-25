/**
 * Converts a file path into the dot-notation key used in `.manifest.ts` files.
 *
 * Removes the trailing `.ts` extension and replaces every `/` separator with a dot.
 *
 * @param filePath - Path of the source file, such as `features/arrays/castings/all.ts`.
 * @returns The dot-notation key, such as `features.arrays.castings.all`.
 */
export function pathToDotNotation(filePath: string): string {
  return filePath
    .replace(/\.ts$/, '') // Enlever l'extension .ts
    .replace(/\//g, '.'); // Remplacer les / par des .
}
