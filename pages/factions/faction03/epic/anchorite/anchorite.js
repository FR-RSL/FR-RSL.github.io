const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chaude étreinte",
          description: `Attaque tous les ennemis. Soigne l'allié ayant le moins de PV de 10% des dégâts infligés.`,
          damage: "2.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Soins +5%", "Soins +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Prière de bravoure",
          description: `Retire un débuff aléatoire sur tous les alliés, puis augmente d'1 tour la durée de tous les buffs alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Confiance sacrée",
          description: `Soigne totalement une cible alliée, puis place un buff ${BUFFS.CRATE} de 30% et un buff ${BUFFS.CDAM} de 30% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "1 046",
        "DEF": "980",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
