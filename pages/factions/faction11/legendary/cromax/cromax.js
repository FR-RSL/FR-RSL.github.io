const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance lunaire",
          description: `Attaque un ennemi. Possède 60% de chances de placer un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "3.3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Liens clair de lune",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. Remplit également le Compteur de Tour de ce Champion de 30%.`,
          damage: "4.5*DEF",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Lune de sang",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour et un débuff ${DEBUFFS.PRE} de 50% pendant 2 tours.`,
          damage: "3.6*DEF",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Peur argentée [P]",
          description: `Lorsqu'il est attaqué, possède 35% de chances de placer un débuff ${DEBUFFS.HEX} d'1 tour sur l'assaillant après chaque frappe.`,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: true,
        }
  ],
  stats: {
        "PV": "18 000",
        "ATQ": "958",
        "DEF": "1 421",
        "VIT": "100",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "50",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRE des Allies lors de toutes les Batailles de 70.`
};
