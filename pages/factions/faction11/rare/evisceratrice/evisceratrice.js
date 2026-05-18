const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Saigner a Blanc",
          description: `Attaque 2 fois un ennemi. Possede 15% de chances supplémentaires de porter un coup critique. Possede 50% de chances de placer un debuff ${DEBUFFS.POISON} de 2.5% pendant 2 tours si cette attaque passe en critique.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Confusion Mortelle",
          description: `Attaque tous les ennemis. Possede 50% de chances de placer un debuff ${DEBUFFS.DEF} de 30% pendant 2 tours.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort3.webp",
          name: "Repression [P]",
          description: `Attaque un Champion ennemi avec la Competence par defaut a chaque fois qu'il recoit un soin ou un Buff. Attaque un ennemi pris au hasard si plusieurs ennemis sont soignes ou recoivent un Buff simultanement.`,
          cooldown: 1,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "12 060",
        "ATQ": "1 409",
        "DEF": "815",
        "VIT": "95",
        "TAUX C.": "15%",
        "DEG C.": "57%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique Taux C. des Alliés dans les batailles d'Arene de 16%.`
};
