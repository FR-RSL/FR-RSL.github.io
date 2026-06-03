const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tactiques de guérilla",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

L'allié ayant les DÉG C. les plus élevés fera équipe et rejoindra l'attaque. L'allié qui rejoint l'attaque utilisera sa compétence par défaut.${RETURN}${RETURN}

Les dégâts infligés par ce Champion et l'allié rejoignant l'attaque augmenteront de 10 % pour chaque débuff sur la cible (s'accumule jusqu'à 100 %).`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Punition draconique",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}

Chaque frappe ignorera 10 % de la DÉF de la cible pour chaque débuff sur la cible (s'accumule jusqu'à 50 %). Chaque frappe augmentera également l'ATQ de ce Champion de 10 % (s'accumule jusqu'à 50 %).${RETURN}${RETURN}

Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "2.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Courroux de la légion",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 2 tours.${RETURN}${RETURN}

Place une frappe supplémentaire sur les ennemis affligés de quelconques débuffs.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Survie à tout prix [P]",
          description: `Remplit le Compteur de Tour de ce Champion de 5 % dès qu'un ennemi ou un allié reçoit un débuff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 520",
        "DEF": "914",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%${RETURN}${RETURN}

(ne s'applique qu'à la Faction des Homme Lézards)${RETURN}${RETURN}

Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
