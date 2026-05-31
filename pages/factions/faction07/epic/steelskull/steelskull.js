const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Décrépitude",
          description: `Attaque 2 fois un ennemi. Possède 10 % de chances de placer un débuff de ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sort de Purification",
          description: `Retire tous les débuffs, sur une cible alliée, puis la soigne de 40 %.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Appuie",
          description: `Place un buff d'${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours. Soigne tous tes alliés à hauteur de 20 % de leurs PV max.`,
          cooldown: 5,
          levelInfo: ["Soins +5%", "Soins +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 277",
        "DEF": "958",
        "VIT": "111",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 27%`,
};
