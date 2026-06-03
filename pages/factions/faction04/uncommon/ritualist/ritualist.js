const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Balafre Puissante",
          description: `Attaque 2 fois un ennemi. Possède 15% de chances de détruire les PV MAX des ennemis de 25% des dégâts infligés.`,
          damage: "2.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Courroux des Dieux",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff de ${DEBUFFS.DEF} de 30% pendant 2 tours.`,
          damage: "6.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 068",
        "DEF": "782",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
