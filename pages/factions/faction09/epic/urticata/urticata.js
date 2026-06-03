const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épines méphitiques",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30% de chances d'augmenter d'1 tour la durée de 2 débuffs ${DEBUFFS.POISON}.`,
          damage: "1.6*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Poison agoniste",
          description: `Attaque 3 fois un ennemi. La première frappe possède 30% de chances de placer un débuff ${DEBUFFS.POISON_S} de 25% pendant 2 tours.`,
          damage: "1.8*ATQ",
          cooldown: 3,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Misérable Lien",
          description: `Attaque 4 fois au hasard. Chaque frappe possède 50% de chances de placer un débuff ${DEBUFFS.HEX} pendant 2 tours.`,
          damage: "1.7*ATQ",
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Portée par le Sang [P]",
          description: `Dès que cette Championne ou un allié place un coup critique sur un ennemi sous débuff ${DEBUFFS.HEX}, possède 10% de chances de placer un débuff ${DEBUFFS.POISON} de 5% sur l'ennemi pendant 1 tour.`,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 555",
        "ATQ": "1 409",
        "DEF": "1 057",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 15%`,
};
