const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "En pleine tête",
          description: `Attaque 1 ennemi. Si la cible possède moins de 30% de PV, cette attaque passe toujours en critique.`,
          damage: "ATQ*3.8",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Carreau Perçant",
          description: `Attaque 1 ennemi. Offre 50% de chances de placer un débuff de ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "ATQ*6",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 178",
        "DEF": "694",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
