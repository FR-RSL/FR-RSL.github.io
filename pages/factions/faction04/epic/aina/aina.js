const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Férocité",
          description: `Attaque 2 fois un ennemi. Possède 15 % de chances d'accorder un Tour Supplémentaire.`,
          damage: "2.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ravage Sanglant",
          description: `Attaque un ennemi. Possède 80 % de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 25 % pendant 3 tours.`,
          damage: "6.4*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dominer",
          description: `Attaque un ennemi. Possède 80 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 3 tours. Soigne ce Champion à hauteur de 30 % des dégâts infligés.`,
          damage: "6.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 487",
        "DEF": "760",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Cryptes de Faction de 40`,
};
