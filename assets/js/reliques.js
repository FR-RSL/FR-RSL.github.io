// Base de données des reliques Raid Shadow Legends - Structure réelle du jeu
const reliquesData = {
    standard: [
        {
            name: "Coeur volcardiaque",
            description: `Arrache, toujours battant, de la poitrine enflamee de Tekton le Brule-sang.
			Lorsque l'ordre est donne, un mur de hautes flammes irradie de ce coeur demoniaque dur comme le granit,
			brulant les fleches et faisant fondre les lames.`,
            rarity: "mythique",
            stats: ["RES +96", "PV +3 185", "DEF +104"],
            gemSlots: 4,
            gemShapes: ["carre", "carre", "rond", "rond"],
            image: "20.png",
            category: "standard",
            effect: `Le porteur place un buff [Bouclier de Magma] de 10% sur tous les allies pendant 2 tours au debut du combat.
			Accorde aussi au porteur un buff [Bouclier de Magma] de 10% quand il perd 25% de PV en une frappe.`,
            upgrades: {
                2: "Force du Bouclier +2%",
                3: "Force du Bouclier +2%", 
                4: "Force du Bouclier +2%",
                5: "Force du Bouclier +2%",
                6: "Force du Bouclier +2%"
            }
        },
        {
            name: "Garde sacree",
            description: `De la lame brisee de Sainte-Mariam du Coeur-pur, Sauveuse du Donjon de Gorge-morne, Martyre des Champs rouges, au coeur du saint des saints de la Citadelle eternelle, preparee pour la guerre durant les periodes critiques.`,
            rarity: "mythique", 
            stats: ["VIT +24", "PV +3 185", "RES +28"],
            gemSlots: 4,
            gemShapes: ["losange", "losange", "rond", "rond"],
            image: "21.png",
            category: "standard",
            effect: `Des que le porteur soigne un allie avec une competence active, a 25% de chances de placer le buff [Ferveur] sur l'allie pendant 1 tour.`,
            upgrades: {
                2: "Chances d'effet +5%",
                3: "Chances d'effet +5%",
                4: "Chances d'effet +5%",
                5: "Chances d'effet +5%",
                6: "Chances d'effet +5%"
            }
        },
        {
            name: "Orbe de Domination",
            description: `Un orbe contenant l'essence du pouvoir absolu`,
            rarity: "legendaire",
            stats: ["ATQ +28%", "C.DMG +35%", "Vitesse +18"],
            gemSlots: 3,
            gemShapes: ["rond", "carre", "triangle"],
            image: "3.png",
            category: "standard",
            effect: "25% de chance d'ignorer la défense sur un coup critique",
            upgrades: {
                2: "Chance +5% (total: 30%)",
                3: "Chance +5% (total: 35%)",
                4: "Chance +10% (total: 45%)",
                5: "Chance +10% (total: 55%)",
                6: "Chance +15% (total: 70%)"
            }
        },
        {
            name: "Relique du Conquérant",
            description: `L'artefact légendaire des plus grands guerriers`,
            rarity: "mythique",
            stats: ["ATQ +35%", "C.RATE +25%", "C.DMG +45%"],
            gemSlots: 4,
            gemShapes: ["rond", "carre", "triangle", "pentagone"],
            image: "4.png",
            category: "standard",
            effect: "Inflige 30% de dégâts supplémentaires et vole 15% des PV",
            upgrades: {
                2: "Dégâts +5%, Vol PV +3% (total: 35% dégâts, 18% vol)",
                3: "Dégâts +5%, Vol PV +2% (total: 40% dégâts, 20% vol)",
                4: "Dégâts +10%, Vol PV +5% (total: 50% dégâts, 25% vol)",
                5: "Dégâts +10%, Vol PV +5% (total: 60% dégâts, 30% vol)",
                6: "Dégâts +15%, Vol PV +10% (total: 75% dégâts, 40% vol)"
            }
        }
    ],
    chimere: [
        {
            name: "Griffe de Chimère",
            description: `Une griffe acérée de la légendaire chimère`,
            rarity: "epique",
            stats: ["ATQ +25%", "Précision +40", "Vitesse +15"],
            gemSlots: 2,
            gemShapes: ["triangle", "losange"],
            image: "griffe-chimere.png",
            category: "chimere"
        },
        {
            name: "Cœur de Chimère",
            description: `Le cœur battant de la bête mythique`,
            rarity: "legendaire",
            stats: ["PV +30%", "ATQ +20%", "Résistance +50"],
            gemSlots: 3,
            gemShapes: ["rond", "triangle", "losange"],
            image: "coeur-chimere.png",
            category: "chimere"
        },
        {
            name: "Essence de Chimère",
            description: `L'essence pure de la créature légendaire`,
            rarity: "mythique",
            stats: ["ATQ +32%", "PV +28%", "C.RATE +22%"],
            gemSlots: 4,
            gemShapes: ["rond", "carre", "triangle", "losange"],
            image: "essence-chimere.png",
            category: "chimere"
        }
    ],
    "aventure-alice": [
        {
            name: "Regard du Chat",
            description: `Le porteur ignore <span class='gt'>10%</span> de la DEF
			de la cible lorsqu'il attaque des ennemis dont les PV MAX sont plus eleves.`,
            rarity: "legendaire",
            stats: ["DEG C. +40%", "ATQ +204", "DEF +104"],
            gemSlots: 3,
            gemShapes: ["triangle", "triangle", "rond"],
            image: "miroir-alice.png",
            category: "aventure-alice"
        },
        {
            name: "Clé des Merveilles",
            description: `La clé qui ouvre tous les mystères`,
            rarity: "legendaire",
            stats: ["Vitesse +25", "Précision +55", "PV +22%"],
            gemSlots: 3,
            gemShapes: ["carre", "triangle", "pentagone"],
            image: "cle-merveilles.png",
            category: "aventure-alice"
        }
    ],
    clan: [
        {
            name: "Bannière du Clan",
            description: `L'étendard sacré qui unit les guerriers`,
            rarity: "rare",
            stats: ["PV +20%", "Défense +18%", "Résistance +30"],
            gemSlots: 1,
            gemShapes: ["carre"],
            image: "banniere-clan.png",
            category: "clan"
        },
        {
            name: "Sceau du Leader",
            description: `Le sceau du chef suprême du clan`,
            rarity: "epique",
            stats: ["ATQ +22%", "PV +25%", "Vitesse +20"],
            gemSlots: 2,
            gemShapes: ["carre", "triangle"],
            image: "sceau-leader.png",
            category: "clan"
        },
        {
            name: "Couronne de Maître",
            description: `La couronne des maîtres légendaires`,
            rarity: "legendaire",
            stats: ["ATQ +30%", "PV +28%", "C.RATE +20%"],
            gemSlots: 3,
            gemShapes: ["rond", "carre", "triangle"],
            image: "couronne-maitre.png",
            category: "clan"
        }
    ],
    "arene-direct": [
        {
            name: "Gant du Champion",
            description: `Le gant porté par les champions d'arène`,
            rarity: "epique",
            stats: ["ATQ +24%", "C.RATE +18%", "Vitesse +16"],
            gemSlots: 2,
            gemShapes: ["rond", "losange"],
            image: "gant-champion.png",
            category: "arene-direct"
        },
        {
            name: "Couronne de Gloire",
            description: `La couronne des vainqueurs éternels`,
            rarity: "legendaire",
            stats: ["ATQ +28%", "C.DMG +40%", "Précision +45"],
            gemSlots: 3,
            gemShapes: ["rond", "triangle", "losange"],
            image: "couronne-gloire.png",
            category: "arene-direct"
        }
    ],
    "guerre-factions": [
        {
            name: "Étendard de Guerre",
            description: `L'étendard qui mène les armées à la victoire`,
            rarity: "rare",
            stats: ["Défense +22%", "PV +18%", "Résistance +35"],
            gemSlots: 1,
            gemShapes: ["triangle"],
            image: "etendard-guerre.png",
            category: "guerre-factions"
        },
        {
            name: "Médaille d'Honneur",
            description: `La médaille des héros de guerre`,
            rarity: "epique",
            stats: ["ATQ +26%", "Défense +20%", "Vitesse +18"],
            gemSlots: 2,
            gemShapes: ["triangle", "pentagone"],
            image: "medaille-honneur.png",
            category: "guerre-factions"
        },
        {
            name: "Relique du Conquérant",
            description: `L'artefact des plus grands conquérants`,
            rarity: "mythique",
            stats: ["ATQ +38%", "PV +32%", "C.RATE +25%"],
            gemSlots: 4,
            gemShapes: ["rond", "carre", "triangle", "pentagone"],
            image: "relique-conquerant-guerre.png",
            category: "guerre-factions"
        }
    ],
    "eveil-chaos": [
        {
            name: "Fragment du Chaos",
            description: `Un fragment de l'énergie chaotique primordiale`,
            rarity: "epique",
            stats: ["ATQ +27%", "C.DMG +32%", "Vitesse +14"],
            gemSlots: 2,
            gemShapes: ["losange", "pentagone"],
            image: "fragment-chaos.png",
            category: "eveil-chaos"
        },
        {
            name: "Œil du Chaos",
            description: `L'œil qui voit à travers les dimensions`,
            rarity: "legendaire",
            stats: ["ATQ +32%", "C.RATE +22%", "Précision +60"],
            gemSlots: 3,
            gemShapes: ["rond", "losange", "pentagone"],
            image: "oeil-chaos.png",
            category: "eveil-chaos"
        }
    ],
    decouverte: [
        {
            name: "Boussole de l'Explorateur",
            description: `Une boussole qui guide vers les trésors cachés`,
            rarity: "rare",
            stats: ["Vitesse +20", "Précision +40", "PV +15%"],
            gemSlots: 1,
            gemShapes: ["pentagone"],
            image: "boussole-explorateur.png",
            category: "decouverte"
        },
        {
            name: "Carte au Trésor Ancienne",
            description: `Une carte menant aux plus grands secrets`,
            rarity: "epique",
            stats: ["ATQ +23%", "Vitesse +22", "Résistance +40"],
            gemSlots: 2,
            gemShapes: ["carre", "losange"],
            image: "carte-tresor.png",
            category: "decouverte"
        },
        {
            name: "Grimoire des Mystères",
            description: `Le livre contenant tous les secrets du monde`,
            rarity: "legendaire",
            stats: ["PV +35%", "Défense +28%", "Précision +65"],
            gemSlots: 3,
            gemShapes: ["carre", "triangle", "losange"],
            image: "grimoire-mysteres.png",
            category: "decouverte"
        }
    ]
};

let currentModal = null;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    displayReliques('all');
    initializeFilters();
    initializeModal();
});

// Affiche les reliques avec animation
function displayReliques(category) {
    const grid = document.getElementById('reliquesGrid');
    
    // Animation de sortie
    const currentCards = grid.querySelectorAll('.relique-card');
    currentCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-out');
    });

    // Attendre la fin de l'animation avant de changer le contenu
    setTimeout(() => {
        grid.innerHTML = '';

        let reliquesToShow = [];
        
        if (category === 'all') {
            // Afficher toutes les reliques
            Object.values(reliquesData).forEach(categoryReliques => {
                reliquesToShow = reliquesToShow.concat(categoryReliques);
            });
        } else {
            // Afficher seulement la catégorie sélectionnée
            reliquesToShow = reliquesData[category] || [];
        }

        // Animation d'entrée
        reliquesToShow.forEach((relique, index) => {
            const card = createReliqueCard(relique);
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            grid.appendChild(card);
            
            // Animation d'apparition avec délai progressif
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
}

// Crée une carte de relique
function createReliqueCard(relique) {
    const card = document.createElement('div');
    card.className = 'relique-card';
    card.setAttribute('data-category', relique.category);
    card.onclick = () => openModal(relique);

    // Génère les statistiques
    const statsHTML = relique.stats.map(stat => `<div>${stat}</div>`).join('');

    // Génère les emplacements de joyaux - seulement les slots disponibles
    let gemSlotsHTML = '';
    for (let i = 0; i < relique.gemSlots; i++) {
        const shape = relique.gemShapes[i] || 'rond';
        gemSlotsHTML += `<div class="gem-slot filled gem-${shape}" title="Emplacement ${shape}"></div>`;
    }

    card.innerHTML = `
        <div class="rarity-badge rarity-${relique.rarity}">${getRarityName(relique.rarity)}</div>
        <div class="relique-icon">
            <img src="../../../assets/images/reliques/${relique.image}" alt="${relique.name}" 
                 onerror="this.outerHTML='<div style=\\'font-size:3rem;\\'>✨</div>'">
        </div>
        <h3>${relique.name}</h3>
        <span class="category-badge category-${relique.category}">${getCategoryName(relique.category)}</span>
    `;

    return card;
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

// Formate le texte des améliorations pour l'affichage en bulle
function getUpgradesText(upgrades) {
    if (!upgrades) return 'Aucune amélioration disponible';
    
    let text = '';
    for (let level = 2; level <= 6; level++) {
        if (upgrades[level]) {
            text += `Niv. ${level}: ${upgrades[level]}\n`;
        }
    }
    return text.trim();
}

// Formate les améliorations en HTML pour la modale
function getUpgradesHTML(upgrades) {
    if (!upgrades) {
        return '<p class="no-upgrades">Aucune amélioration disponible pour cette relique.</p>';
    }
    
    let html = '<div class="upgrades-list">';
    for (let level = 2; level <= 6; level++) {
        if (upgrades[level]) {
            html += `<div class="upgrade-item">
                        <span class="upgrade-level">Niv. ${level}:</span>
                        <span class="upgrade-description">${upgrades[level]}</span>
                     </div>`;
        }
    }
    html += '</div>';
    return html;
}

// Ouvre la modal avec les détails
function openModal(relique) {
    const modal = document.getElementById('reliqueModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    // Bloquer le scroll du body
    document.body.style.overflow = 'hidden';

    modalTitle.textContent = relique.name;

    // Génère les emplacements de joyaux pour la modale - seulement les slots disponibles (plus grands)
    let modalGemSlotsHTML = '';
    for (let i = 0; i < relique.gemSlots; i++) {
        const shape = relique.gemShapes[i] || 'rond';
        modalGemSlotsHTML += `<div class="gem-slot filled large gem-${shape}" title="Emplacement ${shape}"></div>`;
    }

    // Génère les statistiques détaillées
    const modalStatsHTML = relique.stats.map(stat => `<li>${stat}</li>`).join('');

    modalContent.innerHTML = `
        <div class="modal-header-section">
            <div class="modal-visual-info">
                <div class="relique-large-icon">
                    <img src="../../../assets/images/reliques/${relique.image}" alt="${relique.name}" 
                         onerror="this.outerHTML='<div style=\\'font-size:4rem;\\'>✨</div>'">
                </div>
                <div class="relique-main-info">
                    <div class="modal-rarity rarity-${relique.rarity}">
                        <span class="rarity-text">${getRarityName(relique.rarity)}</span>
                        <span class="category-text">${getCategoryName(relique.category)}</span>
                    </div>
                    <div class="modal-description">
                        <p>${relique.description}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal-stats-section">
            <h4>Statistiques de Base :</h4>
            <ul class="stats-list">${modalStatsHTML}</ul>
        </div>

        <div class="modal-gem-slots-section">
            <h4>Emplacements de Joyaux :</h4>
            <div class="modal-gem-slots">${modalGemSlotsHTML}</div>
            <div class="gem-shapes-info">
                <span><strong>Formes disponibles :</strong> ${relique.gemShapes.join(', ')}</span>
            </div>
        </div>
        
        <div class="modal-effect-info">
            <h4>Effet Spécial :</h4>
            <p><strong>${relique.effect || 'Aucun effet spécial défini'}</strong></p>
        </div>
        
        <div class="modal-upgrades-info">
            <h4>Améliorations par Niveau :</h4>
            ${getUpgradesHTML(relique.upgrades)}
        </div>
    `;

    modal.classList.add('active');
    currentModal = relique;
}

// Ferme la modal
function closeModal() {
    const modal = document.getElementById('reliqueModal');
    modal.classList.remove('active');
    currentModal = null;
    
    // Restaurer le scroll du body
    document.body.style.overflow = '';
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
            
            // Display reliques for selected category
            const category = this.dataset.category;
            displayReliques(category);
        });
    });
}

// Initialise la modal
function initializeModal() {
    const modal = document.getElementById('reliqueModal');
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
