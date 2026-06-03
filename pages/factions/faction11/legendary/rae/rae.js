const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Corrosion",
          description: `Attaque tous les ennemis. Offre 30% de chances de placer un débuff de ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "2.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Vagues Arcaniques",
          description: `Attaque tous les ennemis. Inflige 50% de dégâts supplémentaires contre les cibles souffrant de débuffs.`,
          damage: "4.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +15%"],
        },
        {
          img: "assets/sort3.webp",
          name: "Bannissement",
          description: `Attaque tous les ennemis. Retire tous les buffs. Possède 50% de chances de placer un débuff de ${DEBUFFS.GEL} d'1 tour.`,
          damage: "5.3*ATQ",
          cooldown: 7,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 343",
        "DEF": "1 222",
        "VIT": "98",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "40",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Allies dans les Donjons de 33%.`
};
