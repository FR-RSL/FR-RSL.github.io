// Base de données des reliques
const artifactsData = {
    // Reliques Standard
    standard: [
        {
            name: "Attaque",
            image: "attack.png",
            rarity: "rare",
            gemSlots: 1,
            stats: ["+15% ATK (2 pièces)", "Augmente l'ATK", "Bonus offensif"],
            setBonus: "2 pièces: +15% ATK",
            description: "Augmente les dégâts de base de vos attaques",
            recommendations: [
                "Parfait pour les champions DPS",
                "Idéal pour les nukers en PvP",
                "Recommandé pour les champions basés sur l'ATK"
            ],
            synergies: [
                "Se combine bien avec Dégâts Critiques",
                "Efficace avec Taux Critique",
                "Parfait avec Vitesse pour frapper en premier"
            ]
        },
        {
            name: "Défense",
            image: "defense.png",
            rarity: "rare",
            gemSlots: 1,
            stats: ["+15% DEF (2 pièces)", "Augmente la DEF", "Bonus défensif"],
            setBonus: "2 pièces: +15% DEF",
            description: "Augmente la résistance aux dégâts physiques",
            recommendations: [
                "Essentiel pour les tanks",
                "Utile pour les champions défensifs",
                "Recommandé pour les supports résistants"
            ],
            synergies: [
                "Excellent avec Vie pour plus de survie",
                "Combine bien avec Résistance",
                "Parfait avec Immortel pour la durabilité"
            ]
        },
        {
            name: "Vie",
            image: "life.png",
            rarity: "epique",
            gemSlots: 2,
            stats: ["+15% HP (2 pièces)", "Augmente les HP", "Bonus de survie"],
            setBonus: "2 pièces: +15% HP",
            description: "Augmente les points de vie maximum",
            recommendations: [
                "Indispensable pour les tanks",
                "Utile pour tous les rôles",
                "Prioritaire pour la survie en contenu difficile"
            ],
            synergies: [
                "Combine parfaitement avec Défense",
                "Excellent avec Immortel",
                "Utile avec Vol de Vie"
            ]
        },
        {
            name: "Vitesse",
            image: "speed.png",
            rarity: "legendaire",
            gemSlots: 3,
            stats: ["+12% Vitesse (2 pièces)", "Augmente la vitesse", "Initiative"],
            setBonus: "2 pièces: +12% Vitesse",
            description: "Augmente l'ordre de jeu",
            recommendations: [
                "Essentiel en PvP",
                "Prioritaire pour les supports",
                "Critique pour les débuffeurs"
            ],
            synergies: [
                "Combine avec tous les autres sets",
                "Particulièrement utile avec Précision",
                "Excellent avec Perception"
            ]
        },
        {
            name: "Taux Critique",
            image: "crit_rate.png",
            rarity: "epique",
            gemSlots: 2,
            stats: ["+12% Taux Crit (2 pièces)", "Chance de critique", "Précision"],
            setBonus: "2 pièces: +12% Taux Critique",
            description: "Augmente la chance de coup critique",
            recommendations: [
                "Essentiel pour les DPS",
                "Utile pour déclencher des capacités",
                "Important pour maximiser les dégâts"
            ],
            synergies: [
                "Parfait avec Dégâts Critiques",
                "Excellent avec Attaque",
                "Combine bien avec Vitesse"
            ]
        },
        {
            name: "Dégâts Critiques",
            image: "crit_damage.png",
            rarity: "legendaire",
            gemSlots: 3,
            stats: ["+20% Dégâts Crit (2 pièces)", "Puissance critique", "Dégâts max"],
            setBonus: "2 pièces: +20% Dégâts Critiques",
            description: "Augmente les dégâts des coups critiques",
            recommendations: [
                "Indispensable pour les nukers",
                "Prioritaire après avoir atteint 100% taux critique",
                "Essentiel en PvP pour les one-shot"
            ],
            synergies: [
                "Requis avec Taux Critique",
                "Parfait avec Attaque",
                "Excellent avec Vitesse"
            ]
        }
    ],
    
    // Reliques Chimère
    chimere: [
        {
            name: "Perception",
            image: "perception.png",
            rarity: "legendaire",
            gemSlots: 3,
            stats: ["+40 Précision (2 pièces)", "+15% Vitesse", "Contrôle rapide"],
            setBonus: "2 pièces: +40 Précision, +15% Vitesse",
            description: "Combine précision et vitesse pour les débuffeurs rapides",
            recommendations: [
                "Parfait pour les débuffeurs speed",
                "Idéal pour l'ouverture en PvP",
                "Excellent pour les champions de contrôle"
            ],
            synergies: [
                "Remplace Vitesse + Précision",
                "Permet d'utiliser un autre set à 4 pièces",
                "Combine avec tous les sets offensifs"
            ]
        },
        {
            name: "Immortel",
            image: "immortal.png",
            rarity: "mythique",
            gemSlots: 4,
            stats: ["+15% HP (4 pièces)", "Régénération 3% HP/tour", "Survie ultime"],
            setBonus: "4 pièces: +15% HP, Heal 3% HP max par tour",
            description: "Régénération constante de points de vie",
            recommendations: [
                "Excellent pour les tanks",
                "Idéal pour les longs combats",
                "Parfait pour le contenu PvE difficile"
            ],
            synergies: [
                "Combine parfaitement avec Vie/Défense",
                "Excellent avec Résistance",
                "Utile avec tous les sets défensifs"
            ]
        }
    ],
    
    // Aventure d'Alice
    "aventure-alice": [
        {
            name: "Lapin Blanc",
            image: "white_rabbit.png",
            rarity: "legendaire",
            gemSlots: 3,
            stats: ["+20% Vitesse en combat", "Bonus temporel", "Initiative magique"],
            setBonus: "4 pièces: +20% Vitesse quand HP > 50%",
            description: "Vitesse accrue quand en bonne santé",
            recommendations: [
                "Parfait pour maintenir l'initiative",
                "Excellent pour les champions fragiles rapides",
                "Idéal pour les ouvreurs de combat"
            ],
            synergies: [
                "Combine avec sets offensifs",
                "Excellent avec Bouclier",
                "Utile avec Précision"
            ]
        }
    ],
    
    // Reliques de Clan
    clan: [
        {
            name: "Solidarité",
            image: "solidarity.png",
            rarity: "epique",
            gemSlots: 2,
            stats: ["+10% stats par allié vivant", "Bonus d'équipe", "Force collective"],
            setBonus: "4 pièces: +5% toutes stats par allié vivant",
            description: "Plus il y a d'alliés, plus le champion est fort",
            recommendations: [
                "Excellent pour les équipes complètes",
                "Parfait pour les supports d'équipe",
                "Idéal pour les combats longs"
            ],
            synergies: [
                "Combine avec tous les sets",
                "Particulièrement utile avec Vitesse",
                "Excellent avec Vie/Défense"
            ]
        }
    ],
    
    // Arène en Direct
    "arene-direct": [
        {
            name: "Gladiateur",
            image: "gladiator.png",
            rarity: "legendaire",
            gemSlots: 3,
            stats: ["+30% dégâts en PvP", "Maîtrise de l'arène", "Combat spectacle"],
            setBonus: "4 pièces: +25% dégâts en Arène",
            description: "Bonus de dégâts spécifique à l'Arène",
            recommendations: [
                "Spécialisé pour l'Arène",
                "Parfait pour les champions PvP",
                "Essentiel pour le classement"
            ],
            synergies: [
                "Combine avec tous les sets offensifs",
                "Excellent avec Vitesse",
                "Parfait avec Critique"
            ]
        }
    ],
    
    // Guerre de Factions
    "guerre-factions": [
        {
            name: "Ferveur",
            image: "fervor.png",
            rarity: "epique",
            gemSlots: 2,
            stats: ["+20% dégâts vs autres factions", "Fierté factionnelle", "Guerre tribale"],
            setBonus: "2 pièces: +15% dégâts contre autres factions",
            description: "Bonus contre les champions d'autres factions",
            recommendations: [
                "Spécialisé pour les Guerres de Factions",
                "Utile pour débloquer les cryptes",
                "Parfait pour la progression de faction"
            ],
            synergies: [
                "Combine avec Attaque",
                "Excellent avec Critique",
                "Utile avec Vitesse"
            ]
        }
    ],
    
    // Éveil du Chaos
    "eveil-chaos": [
        {
            name: "Entropie",
            image: "entropy.png",
            rarity: "mythique",
            gemSlots: 4,
            stats: ["Stats aléatoires +25%", "Chaos contrôlé", "Imprévisibilité"],
            setBonus: "4 pièces: Effet aléatoire puissant chaque tour",
            description: "Effets chaotiques mais puissants",
            recommendations: [
                "Pour les joueurs aimant le risque",
                "Peut créer des situations exceptionnelles",
                "Idéal pour surprendre l'adversaire"
            ],
            synergies: [
                "Imprévisible avec tous les sets",
                "Potentiellement devastating",
                "Effet de surprise garanti"
            ]
        }
    ],
    
    // Découverte
    decouverte: [
        {
            name: "Explorateur",
            image: "explorer.png",
            rarity: "rare",
            gemSlots: 1,
            stats: ["+50% EXP et Silver", "Bonus de découverte", "Efficacité farming"],
            setBonus: "2 pièces: +25% EXP et récompenses",
            description: "Augmente les gains d'expérience et d'argent",
            recommendations: [
                "Parfait pour le farming",
                "Idéal pour monter de nouveaux champions",
                "Excellent pour l'efficacité économique"
            ],
            synergies: [
                "Utilise avec n'importe quel build",
                "Particulièrement utile en campagne",
                "Excellent pour la progression"
            ]
        }
    ]
};

// Variables globales
let currentFilter = 'all';
let currentModal = null;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeArtifacts();
    setupEventListeners();
});

// Initialise l'affichage des reliques
function initializeArtifacts() {
    displayArtifacts('all');
}

// Configure les écouteurs d'événements
function setupEventListeners() {
    // Filtres de catégorie
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            setActiveFilter(tab);
            displayArtifacts(category);
        });
    });

    // Modal
    const modal = document.getElementById('artifactModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = modal.querySelector('.modal-overlay');

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Fermer avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Active le filtre sélectionné
function setActiveFilter(activeTab) {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    activeTab.classList.add('active');
}

// Affiche les reliques selon la catégorie
function displayArtifacts(category) {
    const grid = document.getElementById('artifactsGrid');
    grid.innerHTML = '';

    let artifactsToShow = [];

    if (category === 'all') {
        // Afficher toutes les reliques
        Object.keys(artifactsData).forEach(cat => {
            artifactsToShow = artifactsToShow.concat(artifactsData[cat]);
        });
    } else {
        // Afficher seulement la catégorie sélectionnée
        artifactsToShow = artifactsData[category] || [];
    }

    artifactsToShow.forEach(artifact => {
        const card = createArtifactCard(artifact);
        grid.appendChild(card);
    });
}

// Crée une carte de relique
function createArtifactCard(artifact) {
    const card = document.createElement('div');
    card.className = 'artifact-card';
    card.onclick = () => openModal(artifact);

    // Génère les emplacements de joyaux
    let gemSlotsHTML = '';
    for (let i = 0; i < 4; i++) {
        const slotClass = i < artifact.gemSlots ? 'gem-slot filled' : 'gem-slot';
        gemSlotsHTML += `<div class="${slotClass}"></div>`;
    }

    // Génère les statistiques
    const statsHTML = artifact.stats.map(stat => `<div>${stat}</div>`).join('');

    card.innerHTML = `
        <div class="rarity-badge rarity-${artifact.rarity}">${getRarityName(artifact.rarity)}</div>
        <div class="artifact-icon">
            <img src="../../../assets/images/artifacts/${artifact.image}" alt="${artifact.name}" 
                 onerror="this.outerHTML='<div style=\\'font-size:2rem;\\'>⚔️</div>'">
        </div>
        <h3>${artifact.name}</h3>
        <div class="artifact-stats">${statsHTML}</div>
        <div class="gem-slots">${gemSlotsHTML}</div>
        <span class="category-badge">${getCategoryName(artifact.category || getKeyByArtifact(artifact))}</span>
    `;

    return card;
}

// Obtient la clé de catégorie par artefact
function getKeyByArtifact(artifact) {
    for (const [key, artifacts] of Object.entries(artifactsData)) {
        if (artifacts.includes(artifact)) {
            return key;
        }
    }
    return 'standard';
}

// Obtient le nom de la rareté
function getRarityName(rarity) {
    const names = {
        'rare': 'Rare',
        'epique': 'Épique',
        'legendaire': 'Légendaire',
        'mythique': 'Mythique'
    };
    return names[rarity] || rarity;
}

// Obtient le nom de la catégorie
function getCategoryName(category) {
    const names = {
        'standard': 'Standard',
        'chimere': 'Chimère',
        'aventure-alice': 'Aventure d\'Alice',
        'clan': 'Clan',
        'arene-direct': 'Arène en Direct',
        'guerre-factions': 'Guerre de Factions',
        'eveil-chaos': 'Éveil du Chaos',
        'decouverte': 'Découverte'
    };
    return names[category] || category;
}

// Ouvre la modal avec les détails
function openModal(artifact) {
    const modal = document.getElementById('artifactModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    modalTitle.textContent = artifact.name;

    // Génère les emplacements de joyaux pour la modale
    let modalGemSlotsHTML = '';
    for (let i = 0; i < 4; i++) {
        const slotClass = i < artifact.gemSlots ? 'gem-slot filled large' : 'gem-slot large';
        modalGemSlotsHTML += `<div class="${slotClass}"></div>`;
    }

    // Génère les statistiques détaillées
    const modalStatsHTML = artifact.stats.map(stat => `<li>${stat}</li>`).join('');

    // Génère le contenu de la description ou du buff
    const descriptionHTML = artifact.description || artifact.setBonus || 'Description non disponible';

    modalContent.innerHTML = `
        <div class="modal-rarity rarity-${artifact.rarity}">
            <span class="rarity-text">${getRarityName(artifact.rarity)}</span>
            <span class="category-text">${getCategoryName(artifact.category || getKeyByArtifact(artifact))}</span>
        </div>
        <div class="modal-artifact-visual">
            <div class="artifact-large-icon">
                <img src="../../../assets/images/artifacts/${artifact.image || 'default.png'}" alt="${artifact.name}" 
                     onerror="this.outerHTML='<div style=\\'font-size:4rem;\\'>⚔️</div>'">
            </div>
            <div class="modal-gem-slots">${modalGemSlotsHTML}</div>
        </div>
        <div class="modal-description">
            <p>${descriptionHTML}</p>
        </div>
        <div class="modal-stats">
            <h4>Statistiques principales :</h4>
            <ul>${modalStatsHTML}</ul>
        </div>
        ${artifact.recommendations ? `
            <div class="modal-recommendations">
                <h4>Recommandations :</h4>
                <ul>${artifact.recommendations.map(rec => `<li>${rec}</li>`).join('')}</ul>
            </div>
        ` : ''}
        ${artifact.synergies ? `
            <div class="modal-synergies">
                <h4>Synergies :</h4>
                <ul>${artifact.synergies.map(syn => `<li>${syn}</li>`).join('')}</ul>
            </div>
        ` : ''}
    `;

    modal.classList.add('active');
    currentModal = artifact;
}

// Ferme la modal
function closeModal() {
    const modal = document.getElementById('artifactModal');
    modal.classList.remove('active');
    currentModal = null;
}
