# Template Champion - Guide d'utilisation

Cette template vous permet de créer rapidement une page pour n'importe quel champion du jeu en remplaçant simplement les variables marquées par `{{}}`.

## Structure des fichiers

- `champion-template.html` - Template HTML
- `champion-template.css` - Template CSS avec tous les styles
- `champion-template.js` - Template JavaScript avec toute la logique
- `README.md` - Ce guide d'utilisation

## Comment utiliser la template

### 1. Copier les fichiers
Copiez les 3 fichiers template dans le dossier de votre champion et renommez-les :
- `champion-template.html` → `nom-champion.html`
- `champion-template.css` → `nom-champion.css`
- `champion-template.js` → `nom-champion.js`

### 2. Variables à remplacer dans le HTML

| Variable | Description | Exemple |
|----------|-------------|---------|
| `{{CHAMPION_NAME}}` | Nom du champion (pour title) | `Arashi` |
| `{{CHAMPION_NAME_LOWER}}` | Nom en minuscules (pour fichiers) | `arashi` |
| `{{CHAMPION_FULL_NAME}}` | Nom complet affiché | `Arashi le Ressac` |
| `{{FACTION_ICON_PATH}}` | Chemin vers l'icône de faction | `../../../../../assets/images/factions/shadowkin.png` |
| `{{HUB_PATH}}` | Chemin vers le hub | `../../hub.html` |
| `{{RARITY}}` | Rareté du champion | `Légendaire` |
| `{{CHAMPION_TYPE}}` | Type du champion | `Défense` |
| `{{AFFINITY_IMAGE_PATH}}` | Chemin vers l'image d'affinité | `../../../../../assets/images/affinity/spirit.png` |
| `{{AFFINITY_NAME}}` | Nom de l'affinité | `Spirit` |

### 3. Variables à remplacer dans le JavaScript

#### Informations générales
| Variable | Description | Exemple |
|----------|-------------|---------|
| `{{CHAMPION_TYPE_SHORT}}` | Type court pour stats | `PV` (ou ATQ, DEF, VIT, SUP) |

#### Sorts (répéter pour sort1, sort2, sort3)
| Variable | Description | Exemple |
|----------|-------------|---------|
| `{{SPELL_1_NAME}}` | Nom du sort | `Lames dissimulées` |
| `{{SPELL_1_DESCRIPTION}}` | Description HTML du sort | `Attaque 2 fois un ennemi.<br><br>...` |
| `{{SPELL_1_DAMAGE}}` | Formule de dégâts | `0.14*PV` |
| `{{SPELL_2_COOLDOWN}}` | Temps de recharge | `5` |
| `{{SPELL_1_LEVEL_2}}` | Amélioration niveau 2 | `Dégâts +10%` |

#### Passif
| Variable | Description | Exemple |
|----------|-------------|---------|
| `{{PASSIVE_NAME}}` | Nom du passif | `Seigneur pirate` |
| `{{PASSIVE_DESCRIPTION}}` | Description du passif | `Au début de chaque Round...` |
| `{{PASSIVE_COOLDOWN}}` | Cooldown si applicable | `4` |

#### Statistiques
| Variable | Description | Exemple |
|----------|-------------|---------|
| `{{STAT_HP}}` | Points de vie | `23 955` |
| `{{STAT_ATK}}` | Attaque | `793` |
| `{{STAT_DEF}}` | Défense | `1 189` |
| `{{STAT_SPD}}` | Vitesse | `100` |
| `{{STAT_CRIT_RATE}}` | Taux critique | `15` |
| `{{STAT_CRIT_DMG}}` | Dégâts critiques | `63` |
| `{{STAT_RES}}` | Résistance | `40` |
| `{{STAT_ACC}}` | Précision | `0` |

#### Aura
| Variable | Description | Exemple |
|----------|-------------|---------|
| `{{AURA_IMAGE_PATH}}` | Chemin vers l'image d'aura | `../../../../../assets/images/auras/speed.png` |
| `{{AURA_DESCRIPTION}}` | Description de l'aura | `Augmente la statistique VIT...` |

### 4. Personnalisation des couleurs (CSS)

Dans le CSS, modifiez la variable `--champion-rarity` selon la rareté :
- Légendaire : `var(--legendary)`
- Épique : `var(--epic)`
- Rare : `var(--rare)`
- Peu commun : `var(--uncommon)`
- Mythique : `var(--mythic)`

Ou ajoutez la classe correspondante au body :
```html
<body class="legendary">
```

### 5. Structure des assets

Créez un dossier `assets` avec :
- `nom-champion.png` - Image principale du champion
- `sort1.png` - Image du premier sort
- `sort2.png` - Image du deuxième sort
- `sort3.png` - Image du troisième sort
- `passif1.png` - Image du passif

### 6. Exemple de remplacement

Remplacez :
```html
<title>{{CHAMPION_NAME}}</title>
```

Par :
```html
<title>Arashi</title>
```

## Fonctionnalités incluses

✅ Design responsive (mobile, tablet, desktop)
✅ Tooltips interactifs sur desktop
✅ Descriptions mobiles automatiques
✅ Animations fluides
✅ Bordure dorée sur l'aura
✅ Effets de survol
✅ Support de tous les types de champions
✅ Gestion des cooldowns
✅ Indicateurs passifs
✅ Styles pour buffs/débuffs

## Notes importantes

- Les images d'aura sont dans `assets/images/auras/`
- Les images d'affinité sont dans `assets/images/affinity/`
- Les icônes de faction sont dans `assets/images/factions/`
- Utilisez `<span class='gbt'>Nom du buff</span>` pour styliser les buffs/débuffs
- Les descriptions supportent le HTML (utilisez `<br>` pour les sauts de ligne)

Cette template est basée sur la page d'Arashi et inclut toutes les améliorations récentes !
