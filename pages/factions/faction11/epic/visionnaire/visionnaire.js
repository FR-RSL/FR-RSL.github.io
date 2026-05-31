const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ectoplasme",
          description: `Attaque un ennemi. Possède 30 % de chances de réduire le Compteur de Tour de la cible de 15 %. Ces chances passent à 100 % si la cible se trouve sous débuff ${DEBUFFS.CRATE} ou ${DEBUFFS.CDAM}.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Hanter",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.CRATE} de 30 % et un débuff ${DEBUFFS.CDAM} de 25 % sur tous les ennemis pendant 2 tours.`,
          damage: "3.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Sombres Transactions",
          description: `Place un buff ${BUFFS.CRATE} de 30 % et un buff ${BUFFS.CDAM} de 30 % sur tous les alliés pendant 2 tours. Remplit également le Compteur de Tour de tous les alliés de 15 %.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 277",
        "DEF": "1 002",
        "VIT": "98",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "15"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés dans les Donjons de 24%.`
};
