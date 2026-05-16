const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Fleches Liantes",
          description: `Attaque 2 fois un ennemi. Possede 35% de chances de placer un debuff ${DEBUFFS.PRE} de 50% pendant 2 tours.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Frisson de la Chasse",
          description: `Attaque 2 fois un ennemi. Soigne cette Championne de 50% des degats infliges lors de chaque coup critique`,
          damage: "2.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Gros Gibier",
          description: `Attaque tous les ennemis.`,
          damage: "3*ATQ + 0.02*PV MAX Ennemi",
          cooldown: 7,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 365",
        "DEF": "815",
        "VIT": "100",
        "TAUX C.": "15%",
        "DEG C.": "57%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.png",
  description: `Augmente la statistique ATQ des Alliés dans les Cryptes de Faction de 17%.`
};
