# TheEnd.page Monorepo

Ce dépôt monorepo contient deux applications principales :

- **web** : Frontend Next.js (React) (filter `web`)
- **graphql-server** : Backend NestJS + Prisma + GraphQL (filter `graphql-server`)

Le mono-repo utilise **pnpm** et **pnpm Workspaces**.

---

## Prérequis

- Node.js v20+ (recommandé)
- pnpm v10+
- MySQL 5.7.8+ ou PostgreSQL 12+ (avec support JSON)
- Git
- (Optionnel) Passenger ou autre process manager pour prod

---

## Installation locale

1. Clonez le dépôt :

   ```bash
   git clone git@github.com:tech-tonik/source.git
   cd source
   ```

2. Installez les dépendances :

   ```bash
   pnpm install
   ```

3. Configurez vos variables d'environnement :

   Copiez les fichiers d'exemple :

   ```bash
   cp .env.example .env
   cp graphql-server/.env.example graphql-server/.env
   ```

   - `DATABASE_URL` (MySQL ou PostgreSQL)
   - `NEXT_PUBLIC_GRAPHQL_URL` (ex. `http://localhost:4000/graphql`)
   - Tout autre secret (JWT, API Keys…)

4. Initialisez la base de données :

   ```bash
   pnpm graphql:db-push
   pnpm graphql:migrate
   pnpm graphql:seed
   ```

---

## Exécution en développement

Lancez le backend et le frontend en parallèle :

```bash
# Terminal 1: GraphQL/NestJS
pnpm graphql:dev

# Terminal 2: Frontend Next.js (TurboPack)
pnpm web:dev
```

Si vous souhaitez utiliser Next.js sans TurboPack :

```bash
pnpm web:dev:wt
```

---

## Build & Production locale

### Backend

```bash
pnpm graphql:build
pnpm graphql:start:prod
# ou si vous utilisez Passenger :
pnpm graphql:start:prod:passenger
```

### Frontend

```bash
pnpm web:build
# lancement en mode production
pnpm --filter web start
# ou via passenger.js (votre script de démarrage)
node web/passenger.js
```

---

## Déploiement via GitHub Actions

Un exemple de workflow CI/CD est fourni dans `.github/workflows/deploy.yml` :

```yaml
name: CI/CD

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      ...
```

Adaptez les chemins et commandes de déploiement selon votre infrastructure.

---

## Scripts utiles

- **Frontend** (dossier `web`) :

  - `pnpm web:dev` / `pnpm web:dev:wt`
  - `pnpm web:build`
  - `pnpm web:generate` (GraphQL Codegen)

- **Backend** (dossier `graphql-server`) :

  - `pnpm graphql:dev`
  - `pnpm graphql:build`
  - `pnpm graphql:generate` (Prisma)
  - `pnpm graphql:migrate`
  - `pnpm graphql:seed`
  - `pnpm graphql:start:prod`
  - `pnpm graphql:start:prod:passenger`

---

## Ressources

- [Prisma Documentation](https://www.prisma.io/docs)
- [NestJS Documentation](https://docs.nestjs.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [pnpm Workspaces](https://pnpm.io/workspaces)

---

## Présentation du schéma de base de données

Ce document détaille l'architecture de la base de données pour l'application **TheEnd.page**, centrée autour des « dernières pages » des utilisateurs. Le schéma est conçu avec Prisma, compatible PostgreSQL et MySQL, et propose :

- **Gestion des utilisateurs**
- **Système de templates dynamiques**
- **Pages de sortie** avec tonalité et contenu riche (textes, GIFs, audio...)
- **Interactions** : réactions, votes, commentaires
- **Extensions** : historique de versions, statistiques de vues et de partages

---

### 1. Modèles principaux

#### 1.1. User

- **id** : identifiant unique (BIGINT AutoIncrement)
- **username** / **email** : options, uniques
- **relations** :

  - `pages` : pages créées
  - `reactions`, `votes`, `comments`, `views`, `shares`, `versions`

- **createdAt** : date de création

> Chaque utilisateur peut être identifié ou anonyme (on passe alors par `sessionId` ailleurs).

#### 1.2. Template

- **id** : identifiant
- **name**, **description**
- **placeholders** (JSON) : liste structurée d'objets décrivant chaque champ à remplir :

  ```jsonc
  [
    {
      "key": "openingLine",
      "label": "Phrase d'ouverture",
      "inputType": "input",
      "required": true,
    },
    {
      "key": "gifUrls",
      "label": "Sélection de GIFs",
      "inputType": "file",
      "component": "GifPicker",
      "multiple": true,
      "accept": [".gif"],
    },
  ]
  ```

- **content** : HTML/Markdown avec helpers conditionnels (`{{#if}}`) pour injecter `data`
- **createdAt**

> Les templates définissent l'UI de création et le rendu final des pages.

#### 1.3. ExitPage

- **id**
- **authorId** (référence User) ou `null` pour anonyme
- **tone** : tonalité choisie (`DRAMATIC`, `IRONIC`, ...)
- **templateId** (référence Template)
- **data** (JSON) : valeurs saisies par l'utilisateur, clés limitées aux `placeholders` activés
- **slug** : identifiant unique pour URL partagée
- **isHallOfFame** : booléen de mise en avant
- **relations** : `reactions`, `votes`, `comments`, `views`, `shares`, `versions`
- **createdAt**, **updatedAt**

> Contient tout le nécessaire pour restaurer et afficher une page.

---

### 2. Interactions & Extensions

#### 2.1. Reaction

- Enregistre chaque clic emoji (`LIKE`, `LOVE`, `HAHA`, ...)
- **pageId**, **userId** (optionnel)
- **type**, **createdAt**
- Index sur `(pageId, type)` pour agrégations rapides.

#### 2.2. Vote

- One vote par page/user (`@@unique([pageId, userId])`)
- Sert à désigner le "Hall of Fame".

#### 2.3. Comment

- Système de threads imbriqués via `parentCommentId`
- Permet retours public ou privé.

#### 2.4. PageVersion

- Historise chaque modification majeure
- `version` incrémentale, copie de `data`
- Audit & rollback possible.

#### 2.5. PageView / PageShare

- **PageView** : trace des visites (avec `sessionId` pour anonymes)
- **PageShare** : trace des partages (`platform`, ex. "twitter")
- Sert aux statistiques d'engagement.

---

### 3. Flux de création et rendu

1. **Récupération** du template → `placeholders` décrit le formulaire.
2. **Formulaire** dynamique : toggles + champs selon `inputType`.
3. **Envoi** des données activées → stockage dans `ExitPage.data`.
4. **Rendu** public : injection de `data` dans `content` du template.
5. **Interactions** : réactions, votes, commentaires, vues, partages.
6. **Mise en Hall of Fame** : via un process asynchrone utilisant la table `Vote`.

---

## 1. Passport

### Utilité

_*Passport*_ est une bibliothèque d'authentification pour Node.js. Dans NestJS, elle est intégrée via le module @nestjs/passport.

➤ Rôle :
Gérer différentes stratégies d’authentification (JWT, Local, OAuth, etc.)

## Simplifier l’implémentation de ces stratégies via des classes Strategy

# 2. Auth Guard

➤ C’est quoi ?
Un Guard est une classe spéciale dans NestJS qui intercepte une requête entrante pour décider si elle peut accéder à une route ou non.

➤ Rôle :
Vérifier l’authentification ou l’autorisation

Agit avant qu’un resolver GraphQL ou un contrôleur ne s’exécute

## 🔄 Workflow

1. Passport gère la logique d’authentification avec différentes stratégies.

2. Tu crées une Strategy (comme JwtStrategy) qui définit comment valider un utilisateur.

3. Tu utilises un Auth Guard (comme GqlAuthGuard) pour protéger des routes (queries/mutations) et injecter les utilisateurs valides dans le contexte GraphQL.

**🧠 Résumé visuel du flow**

```css
Client → [ Authorization: Bearer token ] → NestJS
   ↓
GqlAuthGuard (extends AuthGuard('jwt'))
   ↓
AuthGuard('jwt') appelle JwtStrategy.validate(payload)
   ↓
validate() → retourne un objet user → injecté dans req.user
   ↓
GqlExecutionContext → ctx.getContext().req.user
   ↓
@CurrentUser() → te donne l’objet user
```
