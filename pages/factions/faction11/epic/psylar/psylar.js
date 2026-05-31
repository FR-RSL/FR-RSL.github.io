const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Déferlement",
          description: `Attaque tous les ennemis.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Nuage Toxique",
          description: `Attaque tous les ennemis. Possède 80 % de chances de placer un débuff de ${DEBUFFS.PRE} de 50 % pendant 2 tours.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Jambes de Plomb",
          description: `Place, pendant 2 tours, un débuff de ${DEBUFFS.SPD} de 30 % sur tous les ennemis. Réduit de 40 % le Compteur de Tour de tous les ennemis.`,
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
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés dans les Cryptes de Faction de 22%.`
};
