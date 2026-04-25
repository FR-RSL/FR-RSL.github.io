<div align="center">

# ⚔️ FR-RSL

**Le guide français de référence pour Raid: Shadow Legends**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=for-the-badge&logo=github)](https://fr-rsl.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/Licence-Fan%20Site-blueviolet?style=for-the-badge)](#%EF%B8%8F-mention-légale)

*Fiches champions détaillées · Guides équipement · Hubs de factions · Panel d'administration complet*

</div>

---

## 🗂️ Sommaire

- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Structure du projet](#-structure-du-projet)
- [Panel d'administration](#-panel-dadministration)
- [Technologies](#-technologies)
- [Déploiement](#-déploiement)
- [Mention légale](#%EF%B8%8F-mention-légale)

---

## 🔭 Aperçu

**FR-RSL** est un site de fans francophone dédié à *Raid: Shadow Legends*. Il regroupe en un seul endroit :

- des **fiches champions** complètes (sorts, builds conseillés, lore) pour chaque Légendaire et Mythique des 15 factions du jeu
- des **guides équipement** couvrant les reliques, artefacts, accessoires et bénédictions
- des **hubs de faction** avec présentation, lore, couleurs thématiques et liste des champions disponibles
- un **système de recherche avancé** pour trouver rapidement n'importe quel champion
- un **panel d'administration** privé permettant de gérer tout le contenu directement depuis le navigateur, sans serveur ni build tool

Le site est entièrement statique et hébergé sur **GitHub Pages** — zéro dépendance, zéro framework.

---

## 🚀 Fonctionnalités

### 🦸 Champions
- Fiche individuelle par champion (Légendaire & Mythique) pour les 15 factions
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