const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Estropier",
          description: `Attaque 1 ennemi. Possède 25 % de chances de placer un débuff de ${DEBUFFS.SPD} de 15 % pendant 1 tour.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Poigne Glaciale",
          description: `Attaque 1 ennemi. Offre 50 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 2 tours. Place un débuff de ${DEBUFFS.GEL} d'1 tour si la cible ne souffre pas du débuff de ${DEBUFFS.SPD}.`,
          damage: "5*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 885",
        "ATQ": "1 178",
        "DEF": "716",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
