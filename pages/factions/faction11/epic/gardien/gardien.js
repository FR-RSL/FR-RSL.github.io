const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Marque Mortelle",
          description: `Attaque un ennemi. Possede 40% de chances de placer un debuff ${DEBUFFS.WEAKEN} de 15% pendant 1 tour.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +20%", "Dégâts +10%", "Chances de Buff/Debuff +20%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Flammes Dechirantes",
          description: `Attaque tous les ennemis. Possede 50% de chances de placer un debuff ${DEBUFFS.ATK} de 25% pendant 2 tours. Place un buff ${BUFFS.DEF} de 30% sur tous les allies pendant 2 tours.`,
          damage: "3.7*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Mur d'Epines",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.REFLECT_DAM} de 30% sur tous les allies pendant 2 tours.`,
          damage: "2*ATQ + 2.1*DEF",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "17 340",
        "ATQ": "870",
        "DEF": "1 277",
        "VIT": "98",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "45",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés dans les batailles d'Arene de 30%.`
};
