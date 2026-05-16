const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Deferlement",
          description: `Attaque tous les ennemis.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.png",
          name: "Nuage Toxique",
          description: `Attaque tous les ennemis. Possede 80% de chances de placer un debuff ${DEBUFFS.PRE} de 50% pendant 2 tours.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Jambes de Plomb",
          description: `Place un debuff ${DEBUFFS.SPD} de 30% sur tous les ennemis pendant 2 tours. Reduit egalement de 40% le Compteur de Tour de tous les ennemis.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 123",
        "DEF": "969",
        "VIT": "105",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.png",
  description: `Augmente la statistique VIT des Alliés dans les Cryptes de Faction de 22%.`
};
