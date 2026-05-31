const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Griffes Sanglantes",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 10 % des dégâts infligés.`,
          damage: "4.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dépecer",
          description: `Attaque 2 fois un ennemi. Offre 15 % de chances de placer un débuff de ${DEBUFFS.ATK} de 25 % pendant 2 tours.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "749",
        "DEF": "925",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
