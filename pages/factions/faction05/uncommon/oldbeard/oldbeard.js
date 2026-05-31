const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup au Foie",
          description: `Attaque 1 ennemi. Offre 25 % de chances de placer un débuff de ${DEBUFFS.ATK} de 25 % pendant 2 tours.`,
          damage: "5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Survivre",
          description: `Attaque 1 ennemi. Possède 50 % de chances de placer un débuff de ${DEBUFFS.LEECH} de 2 tours.`,
          damage: "7.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "716",
        "DEF": "1 101",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
