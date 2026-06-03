const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Marque Mortelle",
          description: `Attaque 1 ennemi. Possède 40% de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 15% pendant 1 tour. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +20%", "Dégâts +10%", "Chances de Buff/Debuff +20%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Flammes Déchirantes",
          description: `Attaque tous les ennemis. Offre 50% de chances de placer un débuff de ${DEBUFFS.ATK} de 25% pendant 2 tours. Place, pendant 2 tours, un buff d'${BUFFS.DEF} de 30% sur tous les alliés. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "3.7*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Mur d'Épines",
          description: `Attaque 1 fois tous les ennemis. Place, pendant 2 tours, un buff de ${BUFFS.REFLECT_DAM} de 30% sur tous les alliés.`,
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
