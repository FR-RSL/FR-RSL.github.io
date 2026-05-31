const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hallebarde Écrasante",
          description: `Attaque un ennemi. Possède 20 % de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour.`,
          damage: "0.2*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Au Coeur",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Possède 100 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour, et un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours, si les PV actuels de ce Champion sont plus élevés que les PV actuels de la cible.`,
          damage: "0.32*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rend Humble l'Infidèle",
          description: `Attaque un ennemi. Réduit le Compteur de Tour de la cible de 50 %. Possède 75 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % pendant 2 tours. Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "0.36*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "969",
        "DEF": "1 035",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Donjons de 33%`,
};
