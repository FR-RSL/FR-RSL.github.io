const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Prise d'Élan",
          description: `Attaque un ennemi.

Place un débuff de ${DEBUFFS.DEF} de 30 % pendant 1 tour si la DÉF actuelle de la cible est inférieure à celle de ce Champion.`,
          damage: "4.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Courroux Inéluctable",
          description: `Attaque un ennemi.

Place un débuff de ${DEBUFFS.PROVOKE} d'1 tour si la cible souffre d'un débuff de ${DEBUFFS.DEF}.`,
          damage: "6.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Consterne l'Ennemi [P]",
          description: `Réduit d'1 tour la durée de tous les buffs de l'assaillant lorsque ce Champion est frappé.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "958",
        "DEF": "1 090",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `
Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 30`,
};
