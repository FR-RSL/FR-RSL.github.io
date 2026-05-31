const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sauvagerie",
          description: `Attaque un ennemi. Attaque 2 fois si le pourcentage de PV de la cible est supérieur à celui de ce Champion.`,
          damage: "3.8*ATQMultiplier: 3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Carnage",
          description: `Attaque tous les ennemis. Possède 25 % de chances de placer un débuff de ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "4.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Domination",
          description: `Attaque un ennemi. Possède 60 % de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour. Possède également 60 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 2 tours.`,
          damage: "6.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +20%", "Dégâts +10%", "Chances de Buff/Debuff +20%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 156",
        "DEF": "925",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Cryptes de Faction de 13%`,
};
