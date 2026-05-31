const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coups Tranchants",
          description: `Attaque 2 fois un ennemi.`,
          damage: "1.9*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Protecteur Acharné",
          description: `Place 3 tours de buff de ${BUFFS.SHIELD} et 2 tours de buff de ${BUFFS.COUNTER} sur un allié. Accorde un tour supplémentaire. La valeur du ${BUFFS.SHIELD} est proportionnelle à la DÉF de ce Champion.`,
          cooldown: 5,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Bouclier +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Agacer",
          description: `Attaque 1 ennemi. Possède 80 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} de 2 tours. Place, pendant 2 tours, un buff de ${BUFFS.HEALS} de 15 % sur ce Champion.`,
          damage: "5.8*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "815",
        "DEF": "1 387",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 18%`,
};
