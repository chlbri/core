import { CodeAnalysisFileSchema } from '@bemedev/codebase';
import { parse } from 'valibot';
import code from '#codebase';

/**
 * Validates the statically imported `.codebase.json` payload against
 * {@linkcode CodeAnalysisFileSchema}.
 *
 * @returns The validated code analysis file, including `CODEBASE_ANALYSIS` and its optional `STATS`.
 */
export const getFile = () => parse(CodeAnalysisFileSchema, code);

/**
 * Extracts the codebase analysis record from the validated code analysis file.
 *
 * @returns The analysis record keyed by relative file path.
 * @see {@linkcode getFile}
 */
export const getCodebase = () => getFile().CODEBASE_ANALYSIS;
