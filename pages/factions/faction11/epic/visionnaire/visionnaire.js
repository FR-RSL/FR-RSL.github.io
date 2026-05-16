const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Ectoplasme",
          description: `Attaque un ennemi. Possede 30% de chances de reduire le Compteur de Tour de la cible de 15%. Ces chances passent a 100% si la cible se trouve sous debuff ${DEBUFFS.CRATE} ou ${DEBUFFS.CDAM}`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.png",
          name: "Hanter",
          description: `Attaque tous les ennemis. Possede 75% de chances de placer un debuff ${DEBUFFS.CRATE} de 30% et un debuff ${DEBUFFS.CDAM} de 25% sur tous les ennemis pendant 2 tours.`,
          damage: "3.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Sombres Transactions",
          description: `Place un buff ${BUFFS.CRATE} de 30% et un buff ${BUFFS.CDAM} de 30% sur tous les allies pendant 2 tours. Remplit egalement le Compteur de Tour de tous les allies de 15%.`,
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
  img: "../../../../../assets/images/auras/speed.png",
  description: `Augmente la statistique VIT des Alliés dans les Donjons de 24%.`
};
