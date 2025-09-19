// Base de données des artéfacts (sets d'équipements) Raid Shadow Legends
const artifactsData = {
    offense: [
        {
            name: "Attaque",
            description: "Augmente l'attaque de votre champion",
            bonus2: "Attaque +15%",
            bonus4: "Attaque +30%",
            rarity: "commun",
            type: "Set d'Attaque",
            pieces: ["Arme", "Casque", "Bouclier", "Gants", "Armure", "Bottes"],
            dungeonSource: "Campagne",
            category: "offense",
            image: "attack-set.png",
            recommendations: [
                "Champions attaquants",
                "Nukers Arena",
                "Farming de campagne"
            ],
            synergies: [
                "Set Vitesse pour jouer plus souvent",
                "Set Critique pour maximiser les dégâts",
                "Set Précision pour debuffer"
            ]
        },
        {
            name: "Critique",
            description: "Améliore les chances et dégâts critiques",
            bonus2: "Chance de critique +12%",
            bonus4: "Dégâts critiques +30%",
            rarity: "commun",
            type: "Set de Critique",
            pieces: ["Arme", "Casque", "Bouclier", "Gants", "Armure", "Bottes"],
            dungeonSource: "Donjon des Dracomorphes",
            category: "offense",
            image: "crit-set.png",
            recommendations: [
                "Champions avec multiplicateurs élevés",
                "Build de dégâts Arena",
                "Champions de Clan Boss"
            ],
            synergies: [
                "Set Attaque pour dégâts bruts",
                "Set Vitesse pour fréquence",
                "Gants C.DMG en stat principale"
            ]
        },
        {
            name: "Féroce",
            description: "Bonus de dégâts basé sur les PV manquants de l'ennemi",
            bonus2: "Précision +40",
            bonus4: "Dégâts +18% contre ennemis ayant moins de 50% PV",
            rarity: "rare",
            type: "Set de Férocité",
            pieces: ["Arme", "Casque", "Bouclier", "Gants", "Armure", "Bottes"],
            dungeonSource: "Donjon de l'Esprit",
            category: "offense",
            image: "savage-set.png",
            recommendations: [
                "Champions exécuteurs",
                "Arena pour finir les ennemis",
                "Tour Maudite"
            ],
            synergies: [
                "Compétences d'exécution",
                "Champions rapides",
                "Build haute attaque"
            ]
        }
    ],
    defense: [
        {
            name: "Vie",
            description: "Augmente les points de vie maximum",
            bonus2: "PV +15%",
            bonus4: "PV +30%",
            rarity: "commun",
            type: "Set de Vie",
            pieces: ["Arme", "Casque", "Bouclier", "Gants", "Armure", "Bottes"],
            dungeonSource: "Campagne",
            category: "defense",
            image: "life-set.png",
            recommendations: [
                "Champions tanks",
                "Healers et supports",
                "Survivabilité générale"
            ],
            synergies: [
                "Set Défense pour tank ultime",
                "Set Résistance contre debuffs",
                "Artefacts avec PV% substats"
            ]
        },
        {
            name: "Défense",
            description: "Augmente la défense physique et magique",
            bonus2: "Défense +15%",
            bonus4: "Défense +30%",
            rarity: "commun",
            type: "Set de Défense",
            pieces: ["Arme", "Casque", "Bouclier", "Gants", "Armure", "Bottes"],
            dungeonSource: "Campagne",
            category: "defense",
            image: "defense-set.png",
            recommendations: [
                "Champions défensifs scalant sur DEF",
                "Tanks principaux",
                "Contenu PvE difficile"
            ],
            synergies: [
                "Set Vie pour survivabilité maximale",
                "Set Immortel pour régénération",
                "Champions avec compétences basées DEF"
            ]
        },
        {
            name: "Régénération",
            description: "Soigne automatiquement chaque tour",
            bonus2: "Vitesse +6",
            bonus4: "Soigne 15% PV max au début de chaque tour",
            rarity: "epique",
            type: "Set de Régénération",
            pieces: ["Arme", "Casque", "Bouclier", "Gants", "Armure", "Bottes"],
            dungeonSource: "Donjon du Feu",
            category: "defense",
            image: "regeneration-set.png",
            recommendations: [
                "Champions haute résistance",
                "Contenu long (Clan Boss, FW)",
                "Survivants solo"
            ],
            synergies: [
                "Set Résistance anti-debuff",
                "Champions immortels",
                "Build de survie extrême"
            ]
        }
    ],
    support: [
        {
            name: "Vitesse",
            description: "Augmente la vitesse d'action",
            bonus2: "Vitesse +12",
            bonus4: "Vitesse +25",
            rarity: "commun",
            type: "Set de Vitesse",
            pieces: ["Arme", "Casque", "Bouclier", "Gants", "Armure", "Bottes"],
            dungeonSource: "Donjon du Dracomorphe",
            category: "support",
            image: "speed-set.png",
            recommendations: [
                "Quasiment tous les champions",
                "Premier dans l'ordre de jeu",
                "Build PvP et PvE"
            ],
            synergies: [
                "Bottes Vitesse en stat principale",
                "N'importe quel autre set",
                "Champions avec buffs d'équipe"
            ]
        },
        {
            name: "Précision",
            description: "Améliore la précision pour placer les debuffs",
            bonus2: "Attaque +12%",
            bonus4: "Précision +40",
            rarity: "commun",
            type: "Set de Précision",
            pieces: ["Arme", "Casque", "Bouclier", "Gants", "Armure", "Bottes"],
            dungeonSource: "Donjon de la Magie",
            category: "support",
            image: "accuracy-set.png",
            recommendations: [
                "Champions debuffers",
                "Contrôle de foule",
                "Champions avec debuffs critiques"
            ],
            synergies: [
                "Substats précision sur artefacts",
                "Champions avec debuffs multiples",
                "Build de contrôle Arena"
            ]
        },
        {
            name: "Résistance",
            description: "Résiste aux effets négatifs ennemis",
            bonus2: "PV +10%",
            bonus4: "Résistance +40",
            rarity: "rare",
            type: "Set de Résistance",
            pieces: ["Arme", "Casque", "Bouclier", "Gants", "Armure", "Bottes"],
            dungeonSource: "Donjon de la Force",
            category: "support",
            image: "resistance-set.png",
            recommendations: [
                "Champions contre debuffers",
                "Clan Boss selon la composition",
                "Arena défense"
            ],
            synergies: [
                "Champions nettoyeurs de debuffs",
                "Build tanky haute résistance",
                "Contre équipes de contrôle"
            ]
        }
    ],
    immortel: [
        {
            name: "Immortel",
            description: "Protège contre la mort une fois par combat",
            bonus2: "Défense +15%",
            bonus4: "Immunité contre la mort fatale (1 fois par combat)",
            rarity: "legendaire",
            type: "Set Immortel",
            pieces: ["Arme", "Casque", "Bouclier", "Gants", "Armure", "Bottes"],
            dungeonSource: "Récompenses spéciales",
            category: "immortel",
            image: "immortal-set.png",
            recommendations: [
                "Champions cruciaux pour l'équipe",
                "Survivants ultimes",
                "Contenu extrême"
            ],
            synergies: [
                "Champions avec résurrection",
                "Build de survie maximale",
                "Stratégies de retournement"
            ]
        }
    ],
    special: [
        {
            name: "Bouclier",
            description: "Applique un bouclier au début du combat",
            bonus2: "PV +15%",
            bonus4: "Bouclier de 30% PV max au début du combat",
            rarity: "epique",
            type: "Set de Bouclier",
            pieces: ["Arme", "Casque", "Bouclier", "Gants", "Armure", "Bottes"],
            dungeonSource: "Donjon de la Force",
            category: "special",
            image: "shield-set.png",
            recommendations: [
                "Premiers tours critiques",
                "Protection contre nukers",
                "Champions fragiles mais essentiels"
            ],
            synergies: [
                "Champions appliquant des boucliers",
                "Équipe de survie",
                "Counter-attack builds"
            ]
        },
        {
            name: "Contre-Attaque",
            description: "Chance de contre-attaquer quand touché",
            bonus2: "Défense +15%",
            bonus4: "30% chance de contre-attaquer quand touché",
            rarity: "epique",
            type: "Set de Contre-Attaque",
            pieces: ["Arme", "Casque", "Bouclier", "Gants", "Armure", "Bottes"],
            dungeonSource: "Donjon de l'Esprit",
            category: "special",
            image: "counterattack-set.png",
            recommendations: [
                "Champions avec contre-attaque native",
                "Tank qui deal des dégâts",
                "Build spécialisé Clan Boss"
            ],
            synergies: [
                "Champions avec buffs de contre-attaque",
                "Artefacts haute attaque",
                "Stratégies défensives agressives"
            ]
        },
        {
            name: "Riposte",
            description: "Augmente les dégâts de contre-attaque",
            bonus2: "C.RATE +12%",
            bonus4: "Dégâts de contre-attaque +25%",
            rarity: "legendaire",
            type: "Set de Riposte",
            pieces: ["Arme", "Casque", "Bouclier", "Gants", "Armure", "Bottes"],
            dungeonSource: "Contenu end-game",
            category: "special",
            image: "retaliation-set.png",
            recommendations: [
                "Synergie avec Set Contre-Attaque",
                "Champions spécialisés riposte",
                "Build très spécifique"
            ],
            synergies: [
                "Set Contre-Attaque obligatoire",
                "Champions avec multiplicateurs élevés",
                "Build critique sur contre-attaque"
            ]
        }
    ]
};

let currentModal = null;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    displayArtifacts('all');
    initializeFilters();
    initializeModal();
});

// Affiche les artéfacts
function displayArtifacts(category) {
    const grid = document.getElementById('artifactsGrid');
    grid.innerHTML = '';

    let artifactsToShow = [];
    
    if (category === 'all') {
        // Afficher tous les artéfacts
        Object.values(artifactsData).forEach(categoryArtifacts => {
            artifactsToShow = artifactsToShow.concat(categoryArtifacts);
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

// Crée une carte d'artéfact
function createArtifactCard(artifact) {
    const card = document.createElement('div');
    card.className = 'artifact-card';
    card.onclick = () => openModal(artifact);

    card.innerHTML = `
        <div class="rarity-badge rarity-${artifact.rarity}">${getRarityName(artifact.rarity)}</div>
        <div class="artifact-icon">
            <img src="../../../assets/images/artifacts/${artifact.image}" alt="${artifact.name}" 
                 onerror="this.outerHTML='<div style=\\'font-size:3rem;\\'>⚔️</div>'">
        </div>
        <h3>${artifact.name}</h3>
        <p class="artifact-type">${artifact.type}</p>
        <div class="bonus-preview">
            <div><strong>2 pièces:</strong> ${artifact.bonus2}</div>
            <div><strong>4 pièces:</strong> ${artifact.bonus4}</div>
        </div>
        <div class="dungeon-source">Source: ${artifact.dungeonSource}</div>
        <span class="category-badge">${getCategoryName(artifact.category)}</span>
    `;

    return card;
}

// Obtient le nom de la rareté
function getRarityName(rarity) {
    const names = {
        'commun': 'Commun',
        'rare': 'Rare',
        'epique': 'Épique',
        'legendaire': 'Légendaire'
    };
    return names[rarity] || rarity;
}

// Obtient le nom de la catégorie
function getCategoryName(category) {
    const names = {
        'offense': 'Offense',
        'defense': 'Défense', 
        'support': 'Support',
        'immortel': 'Immortel',
        'special': 'Spécial'
    };
    return names[category] || category;
}

// Ouvre la modal avec les détails
function openModal(artifact) {
    const modal = document.getElementById('artifactModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    modalTitle.textContent = artifact.name;

    // Génère la liste des pièces
    const piecesHTML = artifact.pieces.map(piece => `<li>${piece}</li>`).join('');

    modalContent.innerHTML = `
        <div class="modal-rarity rarity-${artifact.rarity}">
            <span class="rarity-text">${getRarityName(artifact.rarity)}</span>
            <span class="category-text">${getCategoryName(artifact.category)}</span>
            <span class="type-text">${artifact.type}</span>
        </div>
        <div class="modal-artifact-visual">
            <div class="artifact-large-icon">
                <img src="../../../assets/images/artifacts/${artifact.image}" alt="${artifact.name}" 
                     onerror="this.outerHTML='<div style=\\'font-size:4rem;\\'>⚔️</div>'">
            </div>
        </div>
        <div class="modal-description">
            <p>${artifact.description}</p>
        </div>
        <div class="modal-bonus">
            <h4>Bonus de Set :</h4>
            <div class="bonus-detail">
                <p><strong>2 pièces :</strong> ${artifact.bonus2}</p>
                <p><strong>4 pièces :</strong> ${artifact.bonus4}</p>
            </div>
        </div>
        <div class="modal-pieces">
            <h4>Pièces du Set :</h4>
            <ul>${piecesHTML}</ul>
        </div>
        <div class="modal-source">
            <h4>Où l'obtenir :</h4>
            <p>${artifact.dungeonSource}</p>
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

// Initialise les filtres
function initializeFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Display artifacts for selected category
            const category = this.dataset.category;
            displayArtifacts(category);
        });
    });
}

// Initialise la modal
function initializeModal() {
    const modal = document.getElementById('artifactModal');
    const closeBtn = document.getElementById('modalClose');
    const overlay = document.querySelector('.modal-overlay');

    // Fermer la modal avec le bouton X
    closeBtn.addEventListener('click', closeModal);
    
    // Fermer la modal en cliquant sur l'overlay
    overlay.addEventListener('click', closeModal);
    
    // Fermer la modal avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && currentModal) {
            closeModal();
        }
    });
}
