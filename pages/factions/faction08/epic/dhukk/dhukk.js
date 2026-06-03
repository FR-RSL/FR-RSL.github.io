const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hachoir Fou",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % pendant 2 tours.`,
          damage: "1.9*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Crise Démente",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. Possède également 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours lors de chaque coup critique.`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Festival de Cris",
          description: `Place un débuff ${DEBUFFS.PROVOKE} d'1 tour sur l'ennemi ciblé. Possède également 75 % de chances de placer un débuff ${DEBUFFS.PROVOKE} d'1 tour sur 2 ennemis choisis au hasard.${RETURN}${RETURN}

Place sur ce Champion un buff ${BUFFS.REFLECT_DAM} de 30 % pendant 2 tours et un buff ${BUFFS.UNKILLABLE} pendant 1 tour.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "870",
        "DEF": "1 376",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 31%`,
};
