<div align="center">

# ⚔️ FR-RSL

**Le guide français de référence pour Raid: Shadow Legends**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=for-the-badge&logo=github)](https://fr-rsl.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/Licence-Fan%20Site-blueviolet?style=for-the-badge)](#%EF%B8%8F-mention-légale)
[![Factions](https://img.shields.io/badge/Factions-16-orange?style=for-the-badge)](pages/factions/)
[![Champions](https://img.shields.io/badge/Champions-50%2B-gold?style=for-the-badge)](#-état-du-projet)
[![Zero Deps](https://img.shields.io/badge/Dépendances-0-success?style=for-the-badge)](#-technologies)

*Fiches champions détaillées · Guides équipement · Hubs de factions · Panel d'administration complet*

</div>

---

## 🗂️ Sommaire

- [Aperçu](#-aperçu)
- [État du projet](#-état-du-projet)
- [Factions](#-factions)
- [Raretés](#-raretés)
- [Fonctionnalités](#-fonctionnalités)
- [Fiches champions](#-fiches-champions-en-détail)
- [Structure du projet](#-structure-du-projet)
- [Panel d'administration](#-panel-dadministration)
- [Conventions de code](#-conventions-de-code)
- [Contribuer du contenu](#-contribuer-du-contenu)
- [Technologies](#-technologies)
- [Déploiement](#-déploiement)
- [Feuille de route](#-feuille-de-route)
- [Mention légale](#%EF%B8%8F-mention-légale)

---

## 🔭 Aperçu

**FR-RSL** est un site de fans francophone dédié à *Raid: Shadow Legends*. Il regroupe en un seul endroit :

- des **fiches champions** complètes (sorts, builds conseillés, lore) pour chaque Légendaire et Mythique des 16 factions du jeu
- des **guides équipement** couvrant les reliques, artefacts, accessoires et bénédictions
- des **hubs de faction** avec présentation, lore, couleurs thématiques et liste des champions disponibles par rareté
- un **système de recherche avancé** pour trouver rapidement n'importe quel champion
- un **panel d'administration** privé permettant de gérer tout le contenu directement depuis le navigateur, sans serveur ni build tool

Le site est entièrement statique et hébergé sur **GitHub Pages** — zéro dépendance, zéro framework.

---

## 📊 État du projet

> Dernière mise à jour : mai 2026

### Champions documentés

| Faction | Mythiques | Légendaires | Épiques | Rares | Total |
|---|:---:|:---:|:---:|:---:|:---:|
| Seigneurs (faction01) | 1 | 23+ | — | — | 24+ |
| Hauts Elfes (faction02) | — | — | — | — | — |
| Ordre Sacré (faction03) | 2 | — | — | — | 2+ |
| Barbares (faction04) | 3 | 5 | — | — | 8+ |
| Tribus Ogryn (faction05) | — | — | — | — | — |
| Hommes-Lézards (faction06) | — | 1 | — | — | 1+ |
| Marcheurs de Peau (faction07) | 2 | — | — | — | 2 |
| Orcs (faction08) | 2 | — | — | — | 2 |
| Rejetons Démoniaques (faction09) | — | 17+ | — | — | 17+ |
| Morts-vivants (faction10) | — | — | — | — | — |
| Elfes Noirs (faction11) | — | — | — | — | — |
| Revenants Chevaliers (faction12) | — | — | — | — | — |
| Nains (faction13) | — | — | — | — | — |
| Clan de l'Ombre (faction14) | — | — | — | — | — |
| Gardes Sylvains (faction15) | — | — | — | — | — |
| Argonites (faction16) | — | 1 | — | — | 1+ |

### État des hubs

- ✅ **16/16** hubs actifs avec thème visuel personnalisé
- ✅ **6 sections de rareté** présentes dans chaque hub (Mythique → Commun)
- ✅ Navigation rapide (nav-pills) par rareté dans chaque hub
- ✅ Recherche de champion par nom intégrée dans chaque hub
- ✅ Animations d'entrée des cartes

---

## 🏰 Factions

Le jeu compte 16 factions, chacune avec son identité visuelle propre :

| # | Faction | Couleur principale | Statut |
|:---:|---|:---:|:---:|
| 01 | **Seigneurs** | 🟢 Vert | ✅ Actif |
| 02 | **Hauts Elfes** | 🔵 Bleu azur | ✅ Actif |
| 03 | **Ordre Sacré** | 🟡 Or / blanc | ✅ Actif |
| 04 | **Barbares** | 🟤 Marron terre | ✅ Actif |
| 05 | **Tribus Ogryn** | 🟢 Vert foncé | ✅ Actif |
| 06 | **Hommes-Lézards** | 🟢 Vert émeraude | ✅ Actif |
| 07 | **Marcheurs de Peau** | 🟣 Violet | ✅ Actif |
| 08 | **Orcs** | 🟤 Orange / rouille | ✅ Actif |
| 09 | **Rejetons Démoniaques** | 🔴 Rouge sang | ✅ Actif |
| 10 | **Morts-vivants** | 🔵 Bleu glacial | ✅ Actif |
| 11 | **Elfes Noirs** | 🟣 Violet sombre | ✅ Actif |
| 12 | **Revenants Chevaliers** | ⚪ Argenté | ✅ Actif |
| 13 | **Nains** | 🟠 Orange forge | ✅ Actif |
| 14 | **Clan de l'Ombre** | 🟢 Vert poison | ✅ Actif |
| 15 | **Gardes Sylvains** | 🟢 Vert nature | ✅ Actif |
| 16 | **Argonites** | 🔵 Bleu océan | ✅ Actif |

Chaque faction possède ses propres variables CSS (`--faction-primary`, `--faction-secondary`, `--faction-accent`, `--faction-light`) qui colorent l'ensemble de son hub et de ses fiches champions.

---

## 💎 Raretés

Les champions sont classés en 6 raretés, du plus puissant au plus commun :

| Rareté | Couleur | Variable CSS | Emoji |
|---|:---:|:---:|:---:|
| **Mythique** | Rouge `#e53935` | `--mythic` | ✨ |
| **Légendaire** | Or `#ffb700` | `--legendary` | 👑 |
| **Épique** | Violet `#a259e6` | `--epic` | 💜 |
| **Rare** | Bleu `#3498db` | `--rare` | ⚡ |
| **Peu Commun** | Vert `#4caf50` | `--uncommon` | 🌿 |
| **Commun** | Gris `#9e9e9e` | *(inline)* | ⚪ |

Chaque fiche champion utilise le CSS de sa rareté (`legendary.css` ou `mythical.css`), et les cartes de hub appliquent dynamiquement `data-rarity` pour des effets de hover colorés.

---

## 🚀 Fonctionnalités

### 🦸 Champions
- Fiche individuelle par champion (toutes raretés) pour les 16 factions
- Portrait, description, sorts détaillés, build recommandé
- Thème visuel propre à chaque faction (couleurs CSS variables)
- Système d'aura avec description dynamique (ou masqué si aucune aura)
- Tags de mise en forme riches dans les descriptions : texte en <span class="grn-t">vert</span> ou <span class="gold-t">or</span>

### 🏰 Factions
- **16 factions** couvertes, chacune avec son hub dédié
- Lore, identité visuelle, palette de couleurs personnalisée
- Liste complète des champions par rareté (Mythique → Commun)
- Recherche de champion par nom dans le hub en temps réel

### ⚔️ Équipements
| Section | Contenu |
|---|---|
| **Reliques** | Jeux de sets, effets, priorités par rôle |
| **Artefacts** | Artefacts spéciaux et leurs bonus |
| **Accessoires** | Anneaux, bannières, couronnes |
| **Bénédictions** | Guide des bénédictions et recommandations |

### 🔍 Recherche
- Recherche avancée instantanée sur tous les champions de l'index
- Filtres par faction et par rareté
- Zéro rechargement de page

### 📱 Interface
- Design **dark theme** avec glassmorphism et particules animées
- Entièrement **responsive** (mobile, tablette, desktop)
- Performances optimisées — aucun framework JS/CSS
- Scroll fluide avec compensation du header sticky (`scroll-margin-top`)

---

## 🧩 Fiches champions en détail

Chaque fiche champion est une page HTML autonome, accompagnée de ses assets.

### Structure d'une fiche

```
pages/factions/faction01/legendary/champfort/
├── champfort.html       ← page affichée à l'utilisateur
└── assets/
    └── champfort.png    ← portrait du champion
```

Le fichier `.html` charge `legendary.css` (ou `mythical.css`), puis le runtime JS correspondant (`champion-runtime-legendary.js` ou `champion-runtime-mythical.js`), qui lit les données depuis un objet `champion` défini en inline `<script>` dans le HTML.

### Structure de l'objet `champion`

```js
const champion = {
  name: "Lord Champfort",
  faction: "Seigneurs",
  rarity: "legendary",       // legendary | mythical | epic | rare | uncommon | common
  affinity: "magic",         // magic | force | spirit | void
  role: "support",           // attack | defense | support | hp
  aura: {
    key: "leadership",       // null si pas d'aura
    location: "all",         // all | dungeons | arena | faction
    stat: "ATK",
    value: 33
  },
  spells: [
    {
      name: "Coup de Maître",
      icon: "spell1.png",
      description: "Inflige des dégâts...",
      cooldown: 0,
      upgrades: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"]
    }
    // ...
  ],
  lore: "Texte de lore...",
  build: {
    sets: ["Vitesse", "Précision"],
    stats: { SPD: 200, ACC: 250 },
    masteries: "Soutien"
  }
};
```

### Tags de mise en forme dans les textes

Dans les descriptions de sorts et le lore, deux classes CSS spéciales sont disponibles :

| Tag ouvert | Tag fermant | Effet |
|---|---|---|
| `<span class="grn-t">` | `</span>` | Texte vert vif (`#4ade80`) gras |
| `<span class="gold-t">` | `</span>` | Texte doré (`#ffb700`) gras |

L'éditeur admin propose des boutons `<Vert>`, `</Vert>`, `<Or>`, `</Or>` pour insérer ces tags sans écrire le HTML à la main.

---

## 📁 Structure du projet

```
FR-RSL.github.io/
│
├── index.html                  # Page d'accueil & recherche globale
│
├── assets/
│   ├── css/
│   │   ├── main.css            # Styles globaux, header, footer, layout
│   │   ├── rsl-theme.css       # Thème dark RSL (glassmorphism, variables)
│   │   ├── legendary.css       # Styles fiches Légendaires (+ Épiques, Rares…)
│   │   ├── mythical.css        # Styles fiches Mythiques
│   │   └── footer.css          # Footer global
│   ├── js/
│   │   ├── main.js                       # Particules, nav fluide, recherche globale
│   │   ├── champions-index.js            # Index de tous les champions (données)
│   │   ├── advanced-search.js            # Moteur de recherche avancé
│   │   ├── champion-runtime-legendary.js # Runtime d'affichage fiche légendaire
│   │   ├── champion-runtime-mythical.js  # Runtime d'affichage fiche mythique
│   │   ├── constant.js                   # Constantes : auras, sorts, stats
│   │   └── faction-theme-registry.js     # Mappe favicon → thème faction
│   └── images/
│       ├── factions/           # Logos PNG des 16 factions
│       ├── affinity/           # Icônes d'affinité (magic, force, spirit, void)
│       ├── auras/              # Icônes d'aura
│       ├── reliques/           # Images de reliques
│       └── logos/              # Logo du site
│
├── pages/
│   ├── factions/
│   │   ├── faction01/          # Seigneurs
│   │   │   ├── hub.html        # Hub de la faction
│   │   │   ├── legendary/      # Fiches Légendaires (un dossier par champion)
│   │   │   └── mythical/       # Fiches Mythiques
│   │   ├── faction02/          # Hauts Elfes
│   │   ├── faction03/          # Ordre Sacré
│   │   ├── faction04/          # Barbares
│   │   ├── faction05/          # Tribus Ogryn
│   │   ├── faction06/          # Hommes-Lézards
│   │   ├── faction07/          # Marcheurs de Peau
│   │   ├── faction08/          # Orcs
│   │   ├── faction09/          # Rejetons Démoniaques
│   │   ├── faction10/          # Morts-vivants
│   │   ├── faction11/          # Elfes Noirs
│   │   ├── faction12/          # Revenants Chevaliers
│   │   ├── faction13/          # Nains
│   │   ├── faction14/          # Clan de l'Ombre
│   │   ├── faction15/          # Gardes Sylvains
│   │   └── faction16/          # Argonites
│   ├── equipment/
│   │   ├── index.html          # Vue d'ensemble équipements
│   │   ├── reliques/           # Guide des reliques
│   │   ├── artifacts/          # Guide des artefacts
│   │   ├── accessories/        # Guide des accessoires
│   │   └── blessings/          # Guide des bénédictions
│   └── search/
│       └── index.html          # Page de recherche avancée dédiée
│
└── admin/                      # Panel d'administration (accès privé)
    ├── index.html              # Page de connexion (token GitHub PAT)
    ├── dashboard.html          # Tableau de bord
    ├── champion-creator.html   # Créer un nouveau champion (wizard 5 étapes)
    ├── champion-editor.html    # Modifier un champion existant
    ├── hub-editor.html         # Modifier les hubs de faction
    └── articles.html           # Gérer les articles/actualités
```

---

## 🔐 Panel d'administration

Le panel admin est une interface **privée, protégée par token GitHub PAT** (Personal Access Token). Il permet de gérer l'intégralité du contenu du site sans jamais toucher à un terminal.

> L'accès sans token valide redirige automatiquement vers la page de connexion — aucune page du panel n'est accessible à nu.

### Pages du panel

| Page | Rôle |
|---|---|
| **Dashboard** | Vue d'ensemble : stats (champions, articles, factions), accès rapide aux outils |
| **Créateur de champion** | Wizard 5 étapes : identité · sorts · builds · assets · publication GitHub |
| **Éditeur de champion** | Modifier le `.js` et `.html` d'un champion existant directement depuis le navigateur |
| **Éditeur de hub** | Édition rapide (titre, lore, couleurs) + HTML brut + réordonnancement drag & drop |
| **Gestion des articles** | Créer, éditer, supprimer et publier des articles/actualités |

### Workflow de publication (Créateur de champion)

```
1. Saisie des données (nom, faction, rareté, affinité, rôle, aura)
        ↓
2. Définition des sorts (nom, description, cooldown, améliorations)
        ↓
3. Build recommandé (sets, stats prioritaires, masteries)
        ↓
4. Upload du portrait (base64 → stocké sur GitHub)
        ↓
5. Validation → Publication atomique via GitHub Trees API
        (un seul commit = .html + assets)
```

### Fonctionnement technique

- Authentification via `sessionStorage` (token GitHub PAT)
- Publication via l'**API GitHub Trees** : création de blobs → arbre → commit → mise à jour de la ref — **un seul commit atomique**
- Lecture du contenu via l'API GitHub → décodage base64
- Zéro serveur, zéro base de données — GitHub est le backend

### Validation avant publication

Le créateur vérifie avant chaque publication :
- Slug renseigné et sans espaces
- Nom complet renseigné
- Au moins un sort défini avec un nom
- Portrait uploadé

---

## 🎨 Conventions de code

### CSS

- Toutes les couleurs dynamiques passent par des **variables CSS** (`:root { --faction-primary: ... }`)
- Glassmorphism : `backdrop-filter: blur(20px)` + `background: rgba(..., 0.1)` + `border: 1px solid rgba(..., 0.3)`
- Animations d'entrée via `opacity` + `transform: translateY()` + `transition`
- Pas de framework CSS — tout est écrit à la main

### JavaScript

- Vanilla ES2020 — pas de bundler, pas de transpileur
- Les données champion sont des **objets littéraux** dans des `<script>` inline
- Les runtimes (`champion-runtime-*.js`) lisent `window.champion` ou `const champion` du scope
- `faction-theme-registry.js` détecte la faction active via le favicon `<link rel="shortcut icon">`

### HTML

- Chaque page est autonome (pas de templating côté serveur)
- Les hubs ont un **ID de container par rareté** normalisé :
  - `mythicalContainer`, `legendaryContainer`, `epicContainer`
  - `rareContainer`, `uncommonContainer`, `commonContainer`
- Les cartes champion ont `data-name` et `data-rarity` pour la recherche et le hover coloré

---

## 🤝 Contribuer du contenu

Le site étant statique, toute contribution passe soit par le panel admin, soit par PR directe.

### Ajouter un champion via le panel admin

1. Ouvrir `admin/` et se connecter avec un token GitHub PAT ayant les droits `repo`
2. Aller dans **Créateur de champion**
3. Remplir le wizard 5 étapes
4. Cliquer **Publier** — le champion apparaît sur le hub dans les secondes qui suivent

### Ajouter un champion manuellement (PR)

1. Créer `pages/factions/factionXX/[rarity]/[slug]/[slug].html`
2. Ajouter le portrait dans `assets/[slug].png`
3. Ajouter la carte du champion dans `hub.html` de la faction dans le bon container
4. Ajouter le champion dans `assets/js/champions-index.js`

### Modifier un hub

- Via **Éditeur de hub** dans le panel admin (WYSIWYG + HTML brut)
- Ou directement en éditant `pages/factions/factionXX/hub.html`

---

## 💻 Technologies

| Technologie | Usage |
|---|---|
| **HTML5** | Structure de toutes les pages |
| **CSS3** (Variables, Grid, Flexbox, Animations) | Mise en page, thèmes, glassmorphism |
| **JavaScript vanilla (ES2020)** | Logique, recherche, appels API |
| **GitHub Pages** | Hébergement statique gratuit (branche `main`) |
| **GitHub REST API v3** | Backend du panel admin (lecture/écriture fichiers) |
| **GitHub Trees API** | Publication atomique multi-fichiers en un seul commit |

**Aucune dépendance externe.** Pas de Node.js, pas de bundler, pas de framework. Le site s'ouvre directement avec `index.html`.

---

## 🌐 Déploiement

Le site est hébergé automatiquement sur **GitHub Pages** à partir de la branche `main`.

```
https://fr-rsl.github.io
```

Tout push sur `main` est mis en ligne en quelques secondes. Le panel admin publie directement sur `main` via l'API GitHub — aucune action manuelle requise.

### Développement local

Aucune installation requise. Ouvrir `index.html` dans un navigateur, ou utiliser VS Code Live Server pour éviter les restrictions CORS lors des appels à l'API GitHub :

```
http://127.0.0.1:5500
```

---

## 🗺️ Feuille de route

- [ ] Compléter les fiches pour toutes les factions (Morts-vivants, Elfes Noirs, Hauts Elfes…)
- [ ] Ajouter les champions Épiques, Rares, Peu Communs et Communs
- [ ] Page de comparaison de champions côte à côte
- [ ] Filtres avancés sur les hubs (par affinité, par rôle)
- [ ] Section guides : donjons, arène, Hydra, Clan Boss
- [ ] Système de notation communautaire des champions
- [ ] Mode clair (light theme) optionnel
- [ ] Internationalisation (EN) à terme

---

## ⚠️ Mention légale

Ce site est un **projet de fans non-officiel**, indépendant de Plarium.

> *Raid: Shadow Legends* est une marque déposée de **Plarium Games Ltd.**  
> Les images, noms de champions et autres éléments du jeu appartiennent à leurs propriétaires respectifs.  
> Ce site n'est pas affilié, endorsé ou sponsorisé par Plarium.

---

<div align="center">

*Fait avec ❤️ par la communauté FR-RSL*

</div>
- Portrait, description, sorts détaillés, build recommandé
- Thème visuel propre à chaque faction (couleurs CSS variables)
- Navigation inter-factions fluide

### 🏰 Factions
- **15 factions** couvertes, chacune avec son hub dédié
- Lore, identité visuelle, palette de couleurs personnalisée
- Liste complète des champions par rareté (Mythique → Commun)

### ⚔️ Équipements
| Section | Contenu |
|---|---|
| **Reliques** | Jeux de sets, effets, priorités par rôle |
| **Artefacts** | Artefacts spéciaux et leurs bonus |
| **Accessoires** | Anneaux, bannières, couronnes |
| **Bénédictions** | Guide des bénédictions et recommandations |

### 🔍 Recherche
- Recherche avancée instantanée sur tous les champions de l'index
- Filtres par faction et par rareté
- Zéro rechargement de page

### 📱 Interface
- Design **dark theme** avec glassmorphism et particules animées
- Entièrement **responsive** (mobile, tablette, desktop)
- Performances optimisées — aucun framework JS/CSS

---

## 📁 Structure du projet

```
FR-RSL.github.io/
│
├── index.html                  # Page d'accueil & recherche
│
├── assets/
│   ├── css/
│   │   ├── main.css            # Styles globaux + variables CSS
│   │   ├── rsl-theme.css       # Thème RSL (dark, glassmorphism)
│   │   ├── legendary.css       # Styles fiches Légendaires
│   │   ├── mythical.css        # Styles fiches Mythiques
│   │   ├── artifacts.css       # Styles section équipement
│   │   ├── reliques.css        # Styles section reliques
│   │   ├── footer.css          # Footer global
│   │   └── ads.css             # Publicités
│   ├── js/
│   │   ├── main.js             # Logique principale, particules, nav
│   │   ├── champions-index.js  # Index de tous les champions
│   │   ├── advanced-search.js  # Moteur de recherche avancé
│   │   ├── articles.js         # Données des articles/actualités
│   │   ├── artifacts.js        # Données artefacts
│   │   ├── reliques.js         # Données reliques
│   │   ├── cookies.js          # Gestion des cookies
│   │   ├── constant.js         # Constantes globales
│   │   └── faction-theme-registry.js  # Registre des thèmes de faction
│   └── images/
│       ├── factions/           # Logos des 15 factions
│       ├── affinity/           # Icônes d'affinité
│       ├── auras/              # Icônes d'aura
│       ├── reliques/           # Images de reliques
│       └── logos/              # Logo du site
│
├── pages/
│   ├── factions/
│   │   ├── faction01/          # Seigneurs
│   │   ├── faction02/          # Hauts Elfes
│   │   ├── faction03/          # Ordre Sacré
│   │   ├── faction04/          # Barbares
│   │   ├── faction05/          # Tribus Ogryn
│   │   ├── faction06/          # Hommes-Lézards
│   │   ├── faction07/          # Marcheurs de Peau
│   │   ├── faction08/          # Orcs
│   │   ├── faction09/          # Rejetons Démoniaques
│   │   ├── faction10/          # Morts-vivants
│   │   ├── faction11/          # Elfes Noirs
│   │   ├── faction12/          # Revenants Chevaliers
│   │   ├── faction13/          # Nains
│   │   ├── faction14/          # Clan de l'Ombre
│   │   └── faction15/          # Gardes Sylvains
│   │       ├── hub.html        # Hub de la faction
│   │       ├── legendary/      # Fiches champions Légendaires
│   │       └── mythical/       # Fiches champions Mythiques
│   └── equipment/
│       ├── index.html          # Vue d'ensemble équipements
│       ├── reliques/           # Guide des reliques
│       ├── artifacts/          # Guide des artefacts
│       ├── accessories/        # Guide des accessoires
│       └── blessings/          # Guide des bénédictions
│
└── admin/                      # Panel d'administration (accès privé)
    ├── index.html              # Page de connexion
    ├── dashboard.html          # Tableau de bord
    ├── champion-creator.html   # Créer un nouveau champion
    ├── champion-editor.html    # Modifier un champion existant
    ├── hub-editor.html         # Modifier les hubs de faction
    └── articles.html           # Gérer les articles/actualités
```

---

## 🔐 Panel d'administration

Le panel admin est une interface **privée, protégée par token GitHub PAT** (Personal Access Token). Il permet de gérer l'intégralité du contenu du site sans jamais toucher à un terminal.

> L'accès sans token valide redirige automatiquement vers la page de connexion — aucune page du panel n'est accessible à nu.

### Pages du panel

| Page | Rôle |
|---|---|
| **Dashboard** | Vue d'ensemble — stats (champions, articles, factions), accès rapide aux outils |
| **Créateur de champion** | Assistant 5 étapes : identité, sorts, builds, assets, publication sur GitHub |
| **Éditeur de champion** | Modifier le `.js` et `.html` d'un champion existant directement depuis le navigateur |
| **Éditeur de hub** | Edition rapide (titre, lore, couleurs) + HTML brut + **réordonnancement drag & drop** des champions |
| **Gestion des articles** | Créer, éditer, supprimer et publier des articles/actualités |

### Fonctionnement technique

- Authentification via `sessionStorage` (token GitHub PAT)
- Toutes les écritures passent par l'**API REST GitHub** (PUT `/contents/...`) avec SHA de fichier
- Lecture du contenu via l'API GitHub → décodage base64
- Zéro serveur, zéro base de données — GitHub est le backend

---

## 💻 Technologies

| Technologie | Usage |
|---|---|
| **HTML5** | Structure de toutes les pages |
| **CSS3** (Variables, Grid, Flexbox) | Mise en page, thèmes, animations |
| **JavaScript vanilla (ES2020)** | Logique, recherche, appels API |
| **GitHub Pages** | Hébergement statique gratuit |
| **GitHub REST API v3** | Backend du panel admin (lecture/écriture fichiers) |

**Aucune dépendance externe.** Pas de Node.js, pas de bundler, pas de framework. Le site s'ouvre directement avec `index.html`.

---

## 🌐 Déploiement

Le site est hébergé automatiquement sur **GitHub Pages** à partir de la branche `main`.

```
https://fr-rsl.github.io
```

Tout push sur `main` est mis en ligne en quelques secondes.

---

## ⚠️ Mention légale

Ce site est un **projet de fans non-officiel**, indépendant de Plarium.

> *Raid: Shadow Legends* est une marque déposée de **Plarium Games Ltd.**  
> Les images, noms de champions et autres éléments du jeu appartiennent à leurs propriétaires respectifs.  
> Ce site n'est pas affilié, endorsé ou sponsorisé par Plarium.

---

<div align="center">

*Fait avec ❤️ par la communauté FR-RSL*

</div>