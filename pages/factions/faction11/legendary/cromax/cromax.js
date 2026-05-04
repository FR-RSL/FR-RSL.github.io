const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Lance lunaire",
          description: `Attaque un ennemi. Possede 60% de chances de placer un debuff ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "3.3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Liens clair de lune",
          description: `Attaque un ennemi. Possede 75% de chances de placer un debuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. Remplit egalement le Compteur de Tour de ce Champion de 30%.`,
          damage: "4.5*DEF",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Lune de sang",
          description: `Attaque tous les ennemis. Possede 75% de chances de placer un debuff ${DEBUFFS.PROVOKE} pendant 1 tour et un debuff ${DEBUFFS.PRE} de 50% pendant 2 tours.`,
          damage: "3.6*DEF",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Peur argentee [P]",
          description: `Lorsqu'il est attaque, possede 35% de chances de placer un debuff ${DEBUFFS.HEX} pendant 1 tour sur l'assaillant apres chaque frappe.`,
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
  img: "../../../../../assets/images/auras/acc.png",
  description: `Augmente la statistique PRE des Allies lors de toutes les Batailles de 70.`
};
