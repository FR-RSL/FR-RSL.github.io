const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vicieuse Déchirure",
          description: `Attaque 2 fois un ennemi. Possède 20 % de chances de porter un coup supplémentaire.`,
          damage: "1.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Verser le Sang",
          description: `Place un buff d'${BUFFS.SPD} de 30 % sur ce Champion pendant 2 tours. Place également un buff de ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Chasse Féroce [P]",
          description: `Remplit de 15 % le Compteur de Tours de ce Champion lors de chaque coup en critique. Remplit de 50 % le Compteur de Tours de ce Champion si ce Champion tue un ennemi.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 365",
        "DEF": "815",
        "VIT": "87",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Cryptes de Faction de 13%`,
};
