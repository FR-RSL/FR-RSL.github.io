const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Faim aveugle",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe ignorera 10 % de la DÉF de la cible. Ignorera 5 % de DÉF supplémentaires pour chaque débuff dont la cible est affligée. Vole également 10 % du Compteur de Tour de la cible.${RETURN}${RETURN}

Possède 50 % de chances de répéter l'attaque contre une autre cible qui se trouve sous 2 débuffs ou plus, sauf la cible initiale. Se produit une fois par attaque.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Incitateur de panique",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

La première frappe place un débuff ${DEBUFFS.LOCK_PASSIF} et un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.${RETURN}${RETURN}

La seconde frappe applique un effet ${PROP_DEBUFF}, qui prend tous les débuffs de la cible pour les placer sur tous les ennemis. L'effet ${PROP_DEBUFF} fonctionnera même si la cible initiale est tuée.${RETURN}${RETURN}

Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Violence implacable",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.PRE} de 50 % sur ce Champion pendant 2 tours.${RETURN}${RETURN}

Réduit de 2 tours la durée de tous les buffs ennemis et place un débuff ${DEBUFFS.SPD} de 30 % sur tous les ennemis pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mâchoire sans fond [P]",
          description: `Ce Champion est immunisé contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR} et ${DEBUFFS.PETRIFICATION}.${RETURN}${RETURN}

Dès qu'un ennemi essaie de placer l'un de ces débuffs sur ce Champion, active instantanément la compétence Incitateur de panique contre cet ennemi. Ne place pas la compétence Incitateur de panique en temps de recharge.${RETURN}${RETURN}

Augmente les dégâts infligés de 5 % pour chaque débuff placé par ce Champion ou un allié. L'augmentation des dégâts se réinitialise à chaque fois qu'une compétence est utilisée lors du tour de ce Champion (s'accumule jusqu'à 50 %).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 542",
        "DEF": "1 002",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 70`,
};
