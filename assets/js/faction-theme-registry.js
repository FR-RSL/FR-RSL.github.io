/**
 * Registre des thèmes de factions pour les pages de champions
 * Permet d'appliquer automatiquement les couleurs de faction en arrière-plan
 */

const FACTION_THEMES = {
    // Faction 01 - Seigneurs
    'faction01': {
        name: 'Seigneurs',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1e3a8a 100%)',
        particles: '#3b82f6',
        accent: '#60a5fa'
    },
    
    // Faction 02 - Haut Elfes
    'faction02': {
        name: 'Haut Elfes',
        background: 'linear-gradient(135deg, #065f46 0%, #047857 50%, #065f46 100%)',
        particles: '#10b981',
        accent: '#34d399'
    },
    
    // Faction 03 - Ordre Sacré
    'faction03': {
        name: 'Ordre Sacré',
        background: 'linear-gradient(135deg,rgb(165, 161, 152) 0%,rgb(231, 183, 99) 50%,rgb(238, 219, 173) 100%)',
        particles: '#fcd34d',
        accent: '#fde047'
    },
    
    // Faction 04 - Barbares
    'faction04': {
        name: 'Barbares',
        background: 'linear-gradient(135deg,rgb(228, 97, 46) 0%,rgb(241, 159, 34) 50%,rgb(255, 94, 0) 100%)',
        particles: '#ef4444',
        accent: '#f87171'
    },
    
    // Faction 05 - Tribus Ogryn
    'faction05': {
        name: 'Tribus Ogryn',
        background: 'linear-gradient(135deg, #92400e 0%, #a16207 50%, #92400e 100%)',
        particles: '#d97706',
        accent: '#f59e0b'
    },
    
    // Faction 06 - Homme Lézards
    'faction06': {
        name: 'Homme Lézards',
        background: 'linear-gradient(135deg, #166534 0%, #15803d 50%, #166534 100%)',
        particles: '#22c55e',
        accent: '#4ade80'
    },
    
    // Faction 07 - Marcheurs de Peau
    'faction07': {
        name: 'Marcheurs de Peau',
        background: 'linear-gradient(135deg,rgb(184, 53, 9) 0%,rgb(73, 52, 45) 50%,rgb(163, 61, 24) 100%)',
        particles: '#ea580c',
        accent: '#fb923c'
    },
    
    // Faction 08 - Orcs
    'faction08': {
        name: 'Orcs',
        background: 'linear-gradient(135deg,rgb(175, 113, 72) 0%,rgb(218, 68, 48) 50%,rgb(228, 153, 42) 100%)',
        particles: '#84cc16',
        accent: '#a3e635'
    },
    
    // Faction 09 - Rejetons Démoniaques
    'faction09': {
        name: 'Rejetons Démoniaques',
        background: 'linear-gradient(135deg,rgb(163, 20, 51) 0%,rgb(112, 46, 46) 50%,rgb(236, 76, 48) 100%)',
        particles: '#d946ef',
        accent: '#e879f9'
    },
    
    // Faction 10 - Morts-vivants
    'faction10': {
        name: 'Morts-vivants',
        background: 'linear-gradient(135deg, #231f31ff 0%, #283329ff 50%, #2d5042ff 100%)',
        particles: '#6b7280',
        accent: '#9ca3af'
    },
    
    // Faction 11 - Elfes Noirs
    'faction11': {
        name: 'Elfes Noirs',
        background: 'linear-gradient(135deg, #43395eff 0%, #3d3552ff 50%, #292233ff 100%)',
        particles: '#a855f7',
        accent: '#c084fc'
    },
    
    // Faction 12 - Revenants Chevaliers
    'faction12': {
        name: 'Revenants Chevaliers',
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
        particles: '#64748b',
        accent: '#94a3b8'
    },
    
    // Faction 13 - Nains
    'faction13': {
        name: 'Nains',
        background: 'linear-gradient(135deg, #3d3531ff 0%, #7a5c49ff 50%, #8a7343ff 100%)',
        particles: '#ff7f23ff',
        accent: '#fb923c'
    },
    
    // Faction 14 - Clan de l'Ombre
    'faction14': {
        name: 'Clan de l\'Ombre',
        background: 'linear-gradient(135deg, #374151 0%, #1f2937 50%, #374151 100%)',
        particles: '#4b5563',
        accent: '#6b7280'
    },
    
    // Faction 15 - Gardes Sylvains
    'faction15': {
        name: 'Gardes Sylvains',
        background: 'linear-gradient(135deg,rgb(145, 221, 174) 0%,rgb(78, 146, 104) 50%,rgb(66, 167, 106) 100%)',
        particles: '#16a34a',
        accent: '#22c55e'
    },
    
    // Faction 16 - Argonites
    'faction16': {
        name: 'Argonites',
        background: 'linear-gradient(135deg,rgb(255, 202, 29) 0%,rgb(255, 169, 98) 50%,rgb(255, 241, 209) 100%)',
        particles: '#ffd18b',
        accent: '#ffffff'
    },


    // Thème Yakarl - Tempête de Neige
    'yakarl': {
        name: 'Yakarl',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 30%, #1e40af 50%, #1e3a8a 70%, #0f172a 100%)',
        particles: '#60a5fa',
        accent: '#93c5fd'
    },

    // Thème Asgard - Aurore Boréale
    'asgard': {
        name: 'Asgard',
        background: 'linear-gradient(135deg, #0c4a6e 0%, #065f46 25%, #047857 50%, #0891b2 75%, #0e7490 100%)',
        particles: '#06d6a0',
        accent: '#5eead4'
    },

    // Thème Tortues Ninja - Égouts
    'tortues-ninja': {
        name: 'Tortues Ninja',
        background: 'linear-gradient(135deg, #14532d 0%, #166534 30%, #365314 50%, #1a2e05 70%, #0f1b07 100%)',
        particles: '#15803d',
        accent: '#22c55e'
    }
};

/**
 * Détecte automatiquement la faction depuis l'URL ou le chemin
 * @returns {string} ID de la faction (ex: 'faction14')
 */
function detectFaction() {
    const path = window.location.pathname;
    const factionMatch = path.match(/faction(\d{2})/);
    
    if (factionMatch) {
        return `faction${factionMatch[1]}`;
    }
    
    // Fallback: essayer de détecter depuis l'icône de favicon
    const favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon && favicon.href) {
        const iconMatch = favicon.href.match(/faction(\d{2})|(\w+)\.png/);
        if (iconMatch) {
            // Mapping des noms d'icônes vers les IDs de faction
            const iconToFaction = {
                'shadowkin': 'faction14',
                'sylvan': 'faction15',
                'argonites': 'faction16',
                'demonspawn': 'faction09',
                'undead': 'faction10',
                'orcs': 'faction08',
                'barbarians': 'faction04',
                'sacred': 'faction03',
                'high_elves': 'faction02',
                'banner_lords': 'faction01',
                'knight_revenant': 'faction12',
                'dwarves': 'faction13',
                'dark_elves': 'faction11',
                'lizardmen': 'faction06',
                'skinwalkers': 'faction07',
                'ogryn_tribes': 'faction05'
            };
            
            const iconName = iconMatch[2];
            return iconToFaction[iconName] || 'faction14'; // Fallback vers Clan de l'Ombre
        }
    }
    
    return 'faction14'; // Fallback par défaut
}

/**
 * Applique le thème de faction à la page
 * @param {string} factionId - ID de la faction
 */
function applyFactionTheme(factionId = null) {
    const faction = factionId || detectFaction();
    const theme = FACTION_THEMES[faction];
    
    if (!theme) {
        console.warn(`Thème non trouvé pour la faction: ${faction}`);
        return;
    }
    
    const c = theme.accent;

    // Définir la couleur de faction comme variable CSS (utilisée par le CSS des champions)
    document.documentElement.style.setProperty('--faction-primary', c);
    document.documentElement.style.setProperty('--faction-accent', c);

    // Fond : base sombre + halo de couleur faction bien visible en haut + reflet en bas
    document.body.style.background = `
        radial-gradient(ellipse 100% 50% at 50% -5%, ${c}48 0%, transparent 65%),
        radial-gradient(ellipse 45% 30% at 95% 95%, ${c}28 0%, transparent 55%),
        #090807
    `;
    
    console.log(`Thème appliqué: ${theme.name} (${faction})`);
}

/**
 * Initialise le système de thèmes
 */
function initFactionThemes() {
    // Appliquer le thème au chargement de la page
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => applyFactionTheme());
    } else {
        applyFactionTheme();
    }
}

// Auto-initialisation
initFactionThemes();

// Export pour utilisation manuelle
window.FactionThemes = {
    apply: applyFactionTheme,
    detect: detectFaction,
    themes: FACTION_THEMES
};
