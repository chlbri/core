import { CodeAnalysisFileSchema } from '@bemedev/codebase';
import { parse } from 'valibot';
import code from '#codebase';

export const getFile = () => parse(CodeAnalysisFileSchema, code);

export const getCodebase = () => getFile().CODEBASE_ANALYSIS;
