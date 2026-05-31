const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Assaut Épuisant",
          description: `Attaque 2 fois 1 ennemi. Possède 15 % de chances de placer un débuff de ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "5.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Récupération",
          description: `Place un buff de ${BUFFS.HEALS} de 7,5 % et un buff de ${BUFFS.SHIELD} sur ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD} est proportionnelle aux PV MAX de ce Champion.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Souffle Verglacé",
          description: `Attaque 1 ennemi. Possède 75 % de chances de placer un débuff de ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "6.7*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "771",
        "DEF": "1 167",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 17%`,
};
