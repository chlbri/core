# Guide d'utilisation de ts-morph

## Vue d'ensemble

**ts-morph** est un wrapper de l'API du compilateur TypeScript qui facilite
la navigation et la manipulation programmatique du code TypeScript et
JavaScript. Cette bibliothèque était anciennement connue sous le nom de
`ts-simple-ast`.

### Principales fonctionnalités

1. **Enveloppe les objets de l'API du compilateur** pour fournir des
   méthodes d'aide permettant d'obtenir des informations et de modifier des
   fichiers de manière programmatique
2. **Permet de revenir aux objets de l'API du compilateur** si nécessaire
   (ex. `classDeclaration.compilerNode` ou `typeChecker.compilerObject`)
3. **Toutes les modifications sont conservées en mémoire** (y compris les
   déplacements de fichiers et de répertoires) jusqu'à ce que vous
   spécifiiez de sauvegarder dans le système de fichiers sous-jacent
4. **Les modifications sont apportées au texte** et les nœuds encapsulés
   peuvent être conservés entre les manipulations

## Installation

```bash
npm install --save-dev ts-morph
```

Ou avec Deno via JSR :

```bash
deno add ts-morph@jsr:@ts-morph/ts-morph
```

## Démarrage rapide

### 1. Initialisation du projet

```typescript
import { Project, StructureKind } from 'ts-morph';

// Initialiser le projet
const project = new Project({
  // Optionnellement spécifier les options du compilateur, tsconfig.json,
  // système de fichiers en mémoire, et plus encore ici.
  // Si vous initialisez avec un tsconfig.json, il peuplera automatiquement
  // le projet avec les fichiers source associés.
});
```

### 2. Configuration avec tsconfig.json

```typescript
const project = new Project({
  tsConfigFilePath: 'path/to/tsconfig.json',
});

// Pour éviter d'ajouter automatiquement les fichiers du tsconfig.json
const project = new Project({
  tsConfigFilePath: 'path/to/tsconfig.json',
  skipAddingFilesFromTsConfig: true,
});
```

### 3. Configuration des options du compilateur

```typescript
import { Project, ScriptTarget } from 'ts-morph';

const project = new Project({
  compilerOptions: {
    target: ScriptTarget.ES3,
  },
});
```

## Manipulation des fichiers source

### Ajout de fichiers source

```typescript
// Ajouter des fichiers source existants
project.addSourceFilesAtPaths('src/**/*.ts');

// Créer un nouveau fichier source
const myClassFile = project.createSourceFile(
  'src/MyClass.ts',
  'export class MyClass {}',
);

// Créer un fichier avec des structures
const myEnumFile = project.createSourceFile('src/MyEnum.ts', {
  statements: [
    {
      kind: StructureKind.Enum,
      name: 'MyEnum',
      isExported: true,
      members: [{ name: 'member' }],
    },
  ],
});
```

### Navigation et information

```typescript
// Obtenir des informations sur une classe
const myClass = myClassFile.getClassOrThrow('MyClass');
myClass.getName(); // retourne: "MyClass"
myClass.hasExportKeyword(); // retourne: true
myClass.isDefaultExport(); // retourne: false
```

### Manipulation du code

```typescript
// Ajouter une interface
const myInterface = myClassFile.addInterface({
  name: 'IMyInterface',
  isExported: true,
  properties: [
    {
      name: 'myProp',
      type: 'number',
    },
  ],
});

// Renommer une classe
myClass.rename('NewName');

// Ajouter une implémentation d'interface
myClass.addImplements(myInterface.getName());

// Ajouter une propriété
myClass.addProperty({
  name: 'myProp',
  initializer: '5',
});

// Supprimer un fichier
project.getSourceFileOrThrow('src/ExistingFile.ts').delete();
```

### Sauvegarde des modifications

```typescript
// Sauvegarder tous les changements de manière asynchrone
await project.save();

// Ou sauvegarder un fichier spécifique immédiatement
await sourceFile.save();
await sourceFile.deleteImmediately();
await sourceFile.copyImmediately('copiedFile.ts');
await sourceFile.moveImmediately('movedFile.ts');
```

## Manipulation avancée

### Remplacement de nœuds avec du nouveau texte

```typescript
// Remplacer n'importe quel nœud avec du nouveau texte
const originalInitializer = sourceFile
  .getVariableDeclarations()[0]
  .getInitializerOrThrow();
const newInitializer = originalInitializer.replaceWithText('MyReference');
```

### Ajout, insertion et suppression d'instructions

```typescript
// Ajouter des instructions
const statements = sourceFile.addStatements(
  'console.log(5);\nconsole.log(6);',
);

// Insérer des instructions (l'index est l'index enfant où insérer)
const statements = sourceFile.insertStatements(
  3,
  'console.log(5);\nconsole.log(6);',
);

// Supprimer des instructions
sourceFile.removeStatements([1, 3]); // supprime les instructions de l'index 1 à 3
sourceFile.removeStatement(1); // supprime l'instruction à l'index 1
```

### Utilisation du Code Writer

```typescript
functionDeclaration.addStatements(writer => {
  writer.write('if (true)').block(() => {
    writer.write('something;');
  });
});
```

### Corrections de code utiles

```typescript
// Organiser les imports
sourceFile.organizeImports();

// Corriger les imports manquants
sourceFile.fixMissingImports();

// Corriger les identifiants non utilisés
sourceFile.fixUnusedIdentifiers();
```

## Accès aux nœuds du compilateur TypeScript

```typescript
// Obtenir le nœud du compilateur sous-jacent de l'AST TypeScript
const compilerNode = myClassFile.compilerNode;

// Ou naviguer dans les nœuds existants créés avec le compilateur TypeScript
import { createWrappedNode, ClassDeclaration, ts } from "ts-morph";

const classNode: ts.ClassDeclaration = ...; // nœud créé avec l'objet ts
const classDec = createWrappedNode(classNode) as ClassDeclaration;
const firstProperty = classDec.getProperties()[0];
```

## Ressources utiles

- **Documentation officielle** :
  [https://ts-morph.com/](https://ts-morph.com/)
- **Fichier de déclaration** :
  [ts-morph.d.ts](https://github.com/dsherret/ts-morph/blob/latest/packages/ts-morph/lib/ts-morph.d.ts)
- **Dépôt GitHub** :
  [https://github.com/dsherret/ts-morph](https://github.com/dsherret/ts-morph)
- **NPM Package** :
  [https://www.npmjs.com/package/ts-morph](https://www.npmjs.com/package/ts-morph)

## Mots-clés

- TypeScript
- AST (Abstract Syntax Tree)
- Analyse statique
- Génération de code
- Refactoring de code

## Notes importantes

- Cette bibliothèque est encore en développement actif
- La plupart des cas d'usage communs de manipulation/génération de code
  sont implémentés
- Tous les changements sont gardés en mémoire jusqu'à l'appel de `save()`
- Les nœuds encapsulés peuvent être conservés entre les manipulations
- Version actuelle : 26.0.0 (au moment de la rédaction)
- Licence : MIT
