import { readdir, writeFile } from 'fs/promises';
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
 */
export async function generateManifest(): Promise<void> {
  try {
    console.log('🔍 Scan des fichiers TypeScript...');

    const manifestEntries: ManifestEntries = {};

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
          // Récursion dans les sous-répertoires
          await scanDirectory(fullPath, relativeFilePath);
        } else if (
          entry.isFile() &&
          entry.name.endsWith('.ts') &&
          !entry.name.endsWith('.test.ts') &&
          entry.name !== '.manifest.ts'
        ) {
          // Traiter les fichiers TypeScript (sauf les tests et le manifest lui-même)
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
        }
      }
    }

    await scanDirectory(SRC_DIR);

    // Générer le code TypeScript
    const manifestCode = generateManifestWithRegions(manifestEntries);

    // Écrire le fichier
    await writeFile(MANIFEST_FILE, manifestCode, 'utf8');

    console.log('✅ Manifest généré avec succès !');
    console.log(
      `📁 Fichiers trouvés: ${Object.keys(manifestEntries).reduce(
        (acc, section) => {
          if (section === 'index') return acc + 1;
          return (
            acc +
            Object.keys(manifestEntries[section] as ManifestSection).length
          );
        },
        0,
      )}`,
    );
    console.log(
      `📍 Fichier généré: ${relative(process.cwd(), MANIFEST_FILE)}`,
    );
  } catch (error) {
    console.error('❌ Erreur lors de la génération du manifest:', error);
    process.exit(1);
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
