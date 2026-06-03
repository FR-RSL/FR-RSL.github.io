const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tir Harcelant",
          description: `Attaque 1 ennemi. Possède 10% de chances de placer un débuff de ${DEBUFFS.DEF} de 30% pendant 2 tours.`,
          damage: "2.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 245",
        "ATQ": "892",
        "DEF": "628",
        "VIT": "83",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
