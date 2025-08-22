import { readdir, readFile, writeFile } from 'fs/promises';
import { join, relative } from 'path';

// Configuration
export const SRC_DIR = join(process.cwd(), 'src');
export const MANIFEST_FILE = join(SRC_DIR, '.manifest.ts');
export const BASE_PATH = 'src';

// Types
interface ManifestSection {
  [key: string]: string;
}

interface ManifestEntries {
  [key: string]: string | ManifestSection;
}

interface GenerateManifestOptions {
  /** Patterns de fichiers à exclure (glob patterns ou regex) */
  excludePatterns?: (string | RegExp)[];
  /** Fonction personnalisée pour filtrer les fichiers */
  filter?: (filePath: string, isDirectory: boolean) => boolean;
  /** Exclure automatiquement les fichiers de test */
  excludeTests?: boolean;
  /** Répertoire de base pour le scan (par défaut: SRC_DIR) */
  baseDir?: string;
  /** Afficher les logs détaillés */
  verbose?: boolean;
}

/**
 * Lit et parse le manifest existant
 * @returns Le manifest existant ou un objet vide
 */
async function readExistingManifest(): Promise<ManifestEntries> {
  try {
    const manifestContent = await readFile(MANIFEST_FILE, 'utf8');

    // Parse simple du contenu TypeScript pour extraire l'objet MANIFEST
    // Cette approche est simplifiée et fonctionne pour notre format standard
    const match = manifestContent.match(
      /export const MANIFEST = ({[\s\S]*});/,
    );
    if (!match) {
      return {};
    }

    // Évaluer l'objet JavaScript (attention: ceci est sécurisé car nous contrôlons le contenu)
    const objectString = match[1];
    // Remplacer les clés sans guillemets par des clés avec guillemets pour JSON.parse
    const jsonString = objectString
      .replace(/(\w+):/g, '"$1":')
      .replace(/'/g, '"')
      .replace(/,(\s*[}\]])/g, '$1'); // Supprimer les virgules finales

    return JSON.parse(jsonString);
  } catch {
    return {};
  }
}

/**
 * Convertit un chemin de fichier en clé dot-notation
 * @param filePath - Chemin relatif depuis src/
 * @returns Clé en notation pointée
 */
function pathToKey(filePath: string): string {
  // Retirer l'extension .ts
  const withoutExt = filePath.replace(/\.ts$/, '');

  // Remplacer les slashes par des points
  let key = withoutExt.replace(/\//g, '.');

  // Gérer le cas spécial de index.ts
  if (key.endsWith('.index')) {
    key = key.replace(/\.index$/, '.index');
  }

  return key;
}

/**
 * Vérifie si un fichier doit être exclu selon les options
 * @param filePath - Chemin du fichier
 * @param options - Options de génération
 * @returns true si le fichier doit être exclu
 */
function shouldExcludeFile(
  filePath: string,
  options: GenerateManifestOptions,
): boolean {
  const { excludePatterns = [], filter, excludeTests = true } = options;

  // Exclure automatiquement le manifest lui-même
  if (filePath.includes('.manifest.ts')) {
    return true;
  }

  // Exclure les fichiers de test si l'option est activée
  if (
    excludeTests &&
    (filePath.endsWith('.test.ts') || filePath.endsWith('.spec.ts'))
  ) {
    return true;
  }

  // Vérifier les patterns d'exclusion
  for (const pattern of excludePatterns) {
    if (pattern instanceof RegExp) {
      if (pattern.test(filePath)) {
        return true;
      }
    } else {
      // Pattern string - conversion simple en regex
      const regexPattern = pattern
        .replace(/\./g, '\\.')
        .replace(/\*/g, '.*')
        .replace(/\?/g, '.');
      const regex = new RegExp(regexPattern);
      if (regex.test(filePath)) {
        return true;
      }
    }
  }

  // Utiliser le filtre personnalisé si fourni
  if (filter && !filter(filePath, false)) {
    return true;
  }

  return false;
}

/**
 * Génère les régions basées sur les dossiers principaux
 * @param manifestEntries - Entrées du manifest groupées
 * @returns Code TypeScript du manifest avec régions
 */
function generateManifestWithRegions(
  manifestEntries: ManifestEntries,
): string {
  let code = 'export const MANIFEST = {\n';

  // Ajouter l'entrée index en premier
  if (manifestEntries.index) {
    code += `  index: '${manifestEntries.index}',\n\n`;
    delete manifestEntries.index;
  }

  // Trier les clés par ordre alphabétique des sections principales
  const sections = Object.keys(manifestEntries)
    .filter(section => section !== 'index')
    .sort();

  sections.forEach((section, index) => {
    const entries = manifestEntries[section] as ManifestSection;

    // Ignorer les sections vides
    if (!entries || Object.keys(entries).length === 0) {
      return;
    }

    const sectionName = section.charAt(0).toUpperCase() + section.slice(1);

    code += `  // #region ${sectionName}\n`;

    // Trier les entrées dans chaque section
    const sortedKeys = Object.keys(entries).sort();

    sortedKeys.forEach(key => {
      const value = entries[key];
      const formattedKey =
        key.includes('.') || key.includes('-') ? `'${key}'` : key;
      code += `  ${formattedKey}: '${value}',\n`;
    });

    code += '  // #endregion\n';

    // Ajouter une ligne vide entre les sections sauf pour la dernière
    if (index < sections.length - 1) {
      code += '\n';
    }
  });

  code += '};\n';
  return code;
}

/**
 * Scanne tous les fichiers TypeScript dans src/ et génère le manifest
 * @param options - Options de génération du manifest
 */
export async function generateManifest(
  options: GenerateManifestOptions = {},
): Promise<void> {
  try {
    const {
      baseDir = SRC_DIR,
      verbose = false,
      excludePatterns = [],
    } = options;

    if (verbose) {
      console.log('🔍 Scan des fichiers TypeScript...');
      console.log(
        `📂 Répertoire de base: ${relative(process.cwd(), baseDir)}`,
      );
      if (excludePatterns.length > 0) {
        console.log(
          `🚫 Patterns d'exclusion: ${excludePatterns.join(', ')}`,
        );
      }
    }

    const manifestEntries: ManifestEntries = {};
    let excludedCount = 0;
    let includedCount = 0;

    /**
     * Fonction récursive pour scanner un répertoire
     */
    async function scanDirectory(
      dir: string,
      relativePath = '',
    ): Promise<void> {
      const entries = await readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        const relativeFilePath = relativePath
          ? `${relativePath}/${entry.name}`
          : entry.name;

        if (entry.isDirectory()) {
          // Vérifier si le répertoire doit être exclu
          if (options.filter && !options.filter(relativeFilePath, true)) {
            if (verbose) {
              console.log(`🚫 Répertoire exclu: ${relativeFilePath}`);
            }
            excludedCount++;
            continue;
          }
          // Récursion dans les sous-répertoires
          await scanDirectory(fullPath, relativeFilePath);
        } else if (entry.isFile() && entry.name.endsWith('.ts')) {
          // Vérifier si le fichier doit être exclu
          if (shouldExcludeFile(relativeFilePath, options)) {
            if (verbose) {
              console.log(`🚫 Fichier exclu: ${relativeFilePath}`);
            }
            excludedCount++;
            continue;
          }

          // Traiter les fichiers TypeScript inclus
          const key = pathToKey(relativeFilePath);
          const value = `${BASE_PATH}/${relativeFilePath}`;

          // Grouper par section principale (premier segment de la clé)
          const mainSection = key.split('.')[0];

          if (mainSection === 'index') {
            manifestEntries.index = value;
          } else {
            if (!manifestEntries[mainSection]) {
              manifestEntries[mainSection] = {};
            }
            (manifestEntries[mainSection] as ManifestSection)[key] = value;
          }

          includedCount++;
          if (verbose) {
            console.log(`✅ Fichier inclus: ${relativeFilePath} → ${key}`);
          }
        }
      }
    }

    await scanDirectory(baseDir);

    // Générer le code TypeScript
    const manifestCode = generateManifestWithRegions(manifestEntries);

    // Écrire le fichier
    await writeFile(MANIFEST_FILE, manifestCode, 'utf8');

    console.log('✅ Manifest généré avec succès !');
    console.log(`📁 Fichiers inclus: ${includedCount}`);
    if (excludedCount > 0) {
      console.log(`🚫 Fichiers exclus: ${excludedCount}`);
    }
    console.log(
      `📍 Fichier généré: ${relative(process.cwd(), MANIFEST_FILE)}`,
    );
  } catch (error) {
    console.error('❌ Erreur lors de la génération du manifest:', error);
    process.exit(1);
  }
}

/**
 * Génère une entrée de manifest pour un seul fichier
 * @param filePath - Chemin du fichier (relatif ou absolu)
 * @param options - Options de génération
 * @returns Entrée de manifest ou null si le fichier doit être exclu
 */
export function generateManifestEntryForFile(
  filePath: string,
  options: GenerateManifestOptions = {},
): { key: string; value: string } | null {
  // Normaliser le chemin du fichier
  const absolutePath = join(process.cwd(), filePath);
  const relativePath = relative(SRC_DIR, absolutePath);

  // Vérifier si le fichier est dans le répertoire src/
  if (relativePath.startsWith('..')) {
    throw new Error(
      `Le fichier ${filePath} n'est pas dans le répertoire src/`,
    );
  }

  // Vérifier si le fichier doit être exclu
  if (shouldExcludeFile(relativePath, options)) {
    return null;
  }

  // Générer la clé et la valeur
  const key = pathToKey(relativePath);
  const value = `${BASE_PATH}/${relativePath}`;

  return { key, value };
}

/**
 * Ajoute ou met à jour une entrée dans le manifest existant
 * @param filePath - Chemin du fichier
 * @param options - Options de génération
 */
export async function addFileToManifest(
  filePath: string,
  options: GenerateManifestOptions = {},
): Promise<void> {
  try {
    const entry = generateManifestEntryForFile(filePath, options);

    if (!entry) {
      if (options.verbose) {
        console.log(`🚫 Fichier exclu du manifest: ${filePath}`);
      }
      return;
    }

    const { key, value } = entry;

    // Lire le manifest existant si il existe
    const existingManifest = await readExistingManifest();

    // Ajouter la nouvelle entrée
    const mainSection = key.split('.')[0];

    if (mainSection === 'index') {
      existingManifest.index = value;
    } else {
      if (!existingManifest[mainSection]) {
        existingManifest[mainSection] = {};
      }
      (existingManifest[mainSection] as ManifestSection)[key] = value;
    }

    // Régénérer le manifest
    const manifestCode = generateManifestWithRegions(existingManifest);
    await writeFile(MANIFEST_FILE, manifestCode, 'utf8');

    if (options.verbose) {
      console.log(`✅ Fichier ajouté au manifest: ${key} → ${value}`);
    }
  } catch (error) {
    console.error(
      `❌ Erreur lors de l'ajout du fichier au manifest:`,
      error,
    );
  }
}

/**
 * Supprime une entrée du manifest existant
 * @param filePath - Chemin du fichier à supprimer
 * @param options - Options de génération
 */
export async function removeFileFromManifest(
  filePath: string,
  options: GenerateManifestOptions = {},
): Promise<void> {
  try {
    // Normaliser le chemin du fichier
    const absolutePath = join(process.cwd(), filePath);
    const relativePath = relative(SRC_DIR, absolutePath);
    const key = pathToKey(relativePath);

    // Lire le manifest existant
    const existingManifest = await readExistingManifest();
    if (Object.keys(existingManifest).length === 0) {
      if (options.verbose) {
        console.log('⚠️ Aucun manifest existant trouvé');
      }
      return;
    }

    // Supprimer l'entrée
    const mainSection = key.split('.')[0];

    if (mainSection === 'index' && existingManifest.index) {
      delete existingManifest.index;
    } else if (existingManifest[mainSection]) {
      const section = existingManifest[mainSection] as ManifestSection;
      if (section[key]) {
        delete section[key];

        // Supprimer la section si elle est vide
        if (Object.keys(section).length === 0) {
          delete existingManifest[mainSection];
        }
      }
    }

    // Régénérer le manifest
    const manifestCode = generateManifestWithRegions(existingManifest);
    await writeFile(MANIFEST_FILE, manifestCode, 'utf8');

    if (options.verbose) {
      console.log(`🗑️ Fichier supprimé du manifest: ${key}`);
    }
  } catch (error) {
    console.error(
      `❌ Erreur lors de la suppression du fichier du manifest:`,
      error,
    );
  }
}

export /**
 * Fonction de debounce pour éviter les regénérations trop fréquentes
 */
const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | undefined;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
