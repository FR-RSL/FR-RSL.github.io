const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flèche Insidieuse",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.POISON_S} de 25 % pendant 2 tours.`,
          damage: "3.4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Feu d'Âme",
          description: `Place un buff ${BUFFS.PRE} de 50 % et un buff ${BUFFS.ATK} de 50 % sur ce Champion pendant 2 tours, puis attaque un ennemi. Place un débuff ${DEBUFFS.BURN} pendant 2 tours si cette attaque passe en critique.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pluie de Misère",
          description: `Attaque tous les ennemis. Possède 50 % de chances d'augmenter d'1 tour la durée de tous les débuffs.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tireuse d'élite [P]",
          description: `Immunisé contre les débuffs ${DEBUFFS.PRE}.${RETURN}${RETURN}

Augmente le TAUX C. de ce Champion de 0,05 % pour chaque point de PRÉ qu'il possède.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 432",
        "DEF": "947",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
