# 🎮 FR-RSL React - Migration vers React 18

> Migration du projet FR-RSL.github.io vers React 18 avec Vite

## 📋 Structure Migré

```
FR-RSL.github.io/
├── src/                     # Code source React
│   ├── components/         # Composants réutilisables
│   │   ├── Layout/        # Layout principal avec Header/Footer
│   │   ├── Header/        # Navigation principale
│   │   ├── Footer/        # Pied de page
│   │   ├── SearchBar/     # Barre de recherche
│   │   ├── Particles/     # Particules d'arrière-plan
│   │   ├── HeroSection/   # Section héro
│   │   ├── NewsSection/   # Section actualités
│   │   ├── GuidesSection/ # Section guides
│   │   └── FactionsSection/ # Section factions
│   ├── pages/             # Pages principales
│   │   ├── HomePage/      # Page d'accueil
│   │   ├── FactionsPage/  # Page des factions
│   │   ├── EquipmentPage/ # Page équipements
│   │   ├── GuidesPage/    # Page des guides
│   │   ├── ToolsPage/     # Page des outils
│   │   └── CommunityPage/ # Page communauté
│   ├── hooks/            # Hooks React personnalisés
│   ├── utils/            # Utilitaires
│   ├── App.jsx           # Composant racine
│   ├── main.jsx          # Point d'entrée
│   └── index.css         # Styles globaux
├── public/               # Fichiers publics
│   ├── assets/          # Assets statiques (images, CSS, JS)
│   └── data/           # Données JSON
├── .github/workflows/    # Actions GitHub pour déploiement
├── package.json         # Dépendances et scripts
├── vite.config.js       # Configuration Vite
└── index.html          # Template HTML
```

## 🚀 Technologies utilisées

- **React 18** - Library UI moderne
- **Vite** - Build tool rapide et moderne
- **React Router v6** - Routing côté client
- **CSS Modules** - Styles scopés (optionnel)

## 🔧 Scripts disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Prévisualisation du build
npm run preview

# Linting
npm run lint

# Déploiement GitHub Pages
npm run deploy
```

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## 🌐 Déploiement

Le déploiement se fait automatiquement via GitHub Actions :
1. Push sur la branche `main`
2. GitHub Actions build le projet
3. Déploie automatiquement sur GitHub Pages

## 🔄 Migration effectuée

### ✅ Terminé
- [x] Structure de base React 18 + Vite
- [x] Migration HTML vers composants React
- [x] Système de routing avec React Router
- [x] Composants Header, Footer, SearchBar
- [x] Pages principales créées
- [x] Configuration GitHub Actions pour déploiement

### 🔄 En cours / À faire
- [ ] Migration complète des styles CSS
- [ ] Système de recherche fonctionnel
- [ ] Intégration des données JSON existantes
- [ ] Migration des scripts JS spécialisés (artifacts, cookies, etc.)
- [ ] Tests et optimisations

## 🎯 Avantages de la migration

1. **Performance** : Vite + React 18 pour un développement et build ultra-rapide
2. **Maintenabilité** : Code modulaire avec composants réutilisables
3. **SEO** : Possibilité d'ajouter du SSR plus facilement
4. **DX** : Meilleur Developer Experience avec Hot Reload
5. **Moderne** : Stack technique à jour avec les bonnes pratiques

## 🚨 Notes importantes

- Les assets (images, CSS, données) ont été copiés vers `public/`
- Les styles CSS existants sont importés globalement
- La structure de routing respecte l'ancienne architecture
- GitHub Pages configuré pour servir depuis `/dist`

---

*Migration effectuée le 20 septembre 2025*