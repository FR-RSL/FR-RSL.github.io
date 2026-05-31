const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Martèlements",
          description: `Attaque 3 fois 1 ennemi.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Broyeur d'Acier",
          description: `Attaque 1 ennemi. Offre 40 % de chances de placer un débuff de ${DEBUFFS.ATK} de 25 % pendant 2 tours.`,
          damage: "7.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Spectacle Démoralisant",
          description: `Attaque 1 ennemi. Possède 50 % de chances de placer sur la cible un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "7.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "892",
        "DEF": "1 057",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés Magie lors de toutes les Batailles de 17%`,
};
