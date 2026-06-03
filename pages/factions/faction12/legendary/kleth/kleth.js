const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hache atrophique",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 80 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. Il est impossible de résister à ce débuff si la cible a attaqué ce Champion avant ce tour.`,
          damage: "3.3*DEF",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Calcul spirituel",
          description: `Les niveaux de PV de tous les alliés seront amenés au niveau de l'allié qui a le plus de PV. Les niveaux de Compteur de Tour de tous les alliés seront amenés au niveau de l'allié qui a le Compteur de Tour le plus élevé.${RETURN}${RETURN}

Les niveaux de PV de tous les ennemis seront amenés à celui de l'ennemi qui a le moins de PV. Les niveaux de Compteur de Tour de tous les ennemis seront amenés à celui de l'ennemi qui a le Compteur de Tour le plus bas.${RETURN}${RETURN}

Ensuite, place un buff ${BUFFS.TAUNT} sur ce Champion pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Disque de finalité",
          description: `Attaque un ennemi. Avant d'attaquer, transfère tous les débuffs de ce Champion sur la cible et soigne ce Champion de 10 % de ses PV MAX. Soigne ce Champion de 10 % supplémentaires de ses PV MAX pour chaque débuff transféré.${RETURN}${RETURN}

Utilisera toujours cette compétence au lieu de la compétence par défaut lors d'une contre-attaque.`,
          damage: "5*DEFMultiplier: Target Current HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "La Représentation [P]",
          description: `Chaque fois que ce Champion perd 25 % de PV ou plus lors d'une seule frappe, place un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 1 tour.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "727",
        "DEF": "1 597",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 25%${RETURN}${RETURN}

(ne s'applique qu'à la Faction des Revenants Chevaliers)${RETURN}${RETURN}

Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 60`,
};
