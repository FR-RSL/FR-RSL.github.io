const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tir Flamboyant",
          description: `Attaque 1 ennemi. Possède 75 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 1 tour.`,
          damage: "2.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "8 595",
        "ATQ": "980",
        "DEF": "650",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
