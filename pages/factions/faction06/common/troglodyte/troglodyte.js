const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame Acide",
          description: `Attaque 2 fois un ennemi. Possède 20% de chances de placer un débuff de ${DEBUFFS.ATK} de 25% pendant 1 tour. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "1.6*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "9 750",
        "ATQ": "760",
        "DEF": "793",
        "VIT": "87",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
