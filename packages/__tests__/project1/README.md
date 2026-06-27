# @bemedev/core Examples

Ce dossier contient des exemples d'utilisation de la librairie
`@bemedev/core` avec des fonctions arithmétiques de base.

## Installation

Pour installer les dépendances et construire les exemples :

```bash
# Installer les dépendances
npm install

# Construire le projet
npm run build

# Développement avec watch mode
npm run dev

# Nettoyer les fichiers compilés
npm run clean
```

## Structure

- `src/` - Code source TypeScript
  - `add.ts` - Fonctions d'addition
  - `subtract.ts` - Fonctions de soustraction
  - `multiply.ts` - Fonctions de multiplication
  - `divide.ts` - Fonctions de division
  - `power.ts` - Fonctions de puissance
  - `utils.ts` - Fonctions utilitaires
  - `index.ts` - Point d'entrée principal

- `lib/` - Fichiers compilés (générés après `npm run build`)

## Utilisation

```typescript
import { add, multiply, power } from '@bemedev/core-examples';

console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
console.log(power(2, 3)); // 8
```

## Configuration

Le projet utilise son propre `tsconfig.json` qui étend la configuration
principale du projet parent.
