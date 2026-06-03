const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Poussée",
          description: `Attaque 1 ennemi. Possède 25% de chances de placer un débuff de ${DEBUFFS.GEL} d'1 tour.`,
          damage: "75+2.8*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blizzard",
          description: `Attaque tous les ennemis. Possède 60% de chances de placer un débuff ${DEBUFFS.PRE} de 25% pendant 2 tours.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +20%", "Dégâts +15%", "Chances de Buff/Debuff +20%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 555",
        "ATQ": "859",
        "DEF": "1 057",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
