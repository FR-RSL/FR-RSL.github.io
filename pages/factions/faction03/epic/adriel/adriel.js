const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Humilier",
          description: `Attaque un ennemi. Offre 20 % de chances de placer un débuff de ${DEBUFFS.PRE} de 50 % pendant 2 tours.`,
          damage: "4.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rideau de Lumière",
          description: `Soigne tous les alliés à hauteur de 20 % de leurs PV MAX, puis leur offre un buff de ${BUFFS.REFLECT_DAM} de 30 % pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Éclair Aveuglant",
          description: `Attaque tous les ennemis. Offre 50 % de chances de placer un débuff de ${DEBUFFS.ATK} de 50 % pendant 2 tours. Possède 100 % de chances si cette attaque passe en critique.`,
          damage: "3.25*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "1 101",
        "DEF": "980",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés Magie lors de toutes les Batailles de 21%`,
};
