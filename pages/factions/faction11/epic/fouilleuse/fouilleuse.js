const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Toxine Necrotique",
          description: `Attaque un ennemi. Possede 45% de chances de placer un debuff ${DEBUFFS.HEALS} de 100% pendant 2 tours.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Designe pour Mourir",
          description: `Attaque un ennemi. Place un debuff ${DEBUFFS.WEAKEN} de 25% sur la cible pendant 3 tours si la cible souffre d'un debuff ${DEBUFFS.DEF}. Il est impossible de résister a ce debuff.`,
          damage: "6.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Finisseur",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50% sur cette Championne pendant 2 tours et possède 50% de chances de placer un debuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 299",
        "DEF": "914",
        "VIT": "98",
        "TAUX C.": "15%",
        "DEG C.": "60%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés dans les Cryptes de Faction de 27%.`
};
