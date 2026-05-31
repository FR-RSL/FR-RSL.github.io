const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ravager",
          description: `Attaque tous les ennemis. Offre 25 % de chances de placer un débuff de ${DEBUFFS.SPD} de 15 % pendant 2 tours.`,
          damage: "1.7*DEF+1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vigueur Néflamme",
          description: `Place un buff de ${BUFFS.HEALS} de 7,5 % et un buff de ${BUFFS.REFLECT_DAM} de 15 % sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dévier",
          description: `Place, pendant 1 tour, un buff de ${BUFFS.BLOCK_DAMAGE} sur un allié.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "958",
        "DEF": "1 079",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 19%`,
};
