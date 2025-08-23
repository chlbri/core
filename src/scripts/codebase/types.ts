// Types pour l'analyse du codebase

export type DeclarationKind =
  | 'function'
  | 'class'
  | 'interface'
  | 'type'
  | 'variable'
  | 'const'
  | 'let'
  | 'enum';

export type ImportInfo = {
  /** Module importé (ex: './utils', 'fs', etc.) */
  moduleSpecifier: string;
  /** Type d'import (default, named, namespace, etc.) */
  kind: 'default' | 'named' | 'namespace' | 'side-effect';
  /** Noms importés pour les imports named */
  namedImports?: string[];
  /** Nom de l'import default ou namespace */
  default?: string;
  /** Import dynamique */
  isDynamic?: boolean;
};

export type ExportInfo = {
  /** Nom de l'export */
  name: string;
  /** Type d'export */
  kind: 'default' | 'named' | 'namespace';
  /** Texte complet de l'export */
  text?: string;
  /** Si c'est un re-export, le module source */
  moduleSpecifier?: string;
  /** Si c'est une déclaration (function, class, etc.) */
  declarationKind?: DeclarationKind;
};

export type FileAnalysis = {
  /** Chemin relatif du fichier depuis src/ */
  relativePath: string;
  /** Liste des imports du fichier */
  imports: ImportInfo[];
  /** Liste des exports du fichier */
  exports: ExportInfo[];
  text: string;
};

export type CodebaseAnalysis = Record<string, FileAnalysis>;
