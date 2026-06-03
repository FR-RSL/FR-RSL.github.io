const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Punir",
          description: `Attaque un ennemi. Possède 25 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "0.24*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sainte Équité",
          description: `Soigne l'allié ayant le moins de PV de 20 % des PV MAX de ce Champion, puis égalise les niveaux de PV de tous les alliés et accorde un Tour supplémentaire à ce Champion.`,
          cooldown: 6,
          levelInfo: ["Soins +5%", "Soins +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rebuffade [P]",
          description: `Reçoit 15 % de dégâts en moins de la part des ennemis sous débuff ${DEBUFFS.PROVOKE}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "859",
        "DEF": "903",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
