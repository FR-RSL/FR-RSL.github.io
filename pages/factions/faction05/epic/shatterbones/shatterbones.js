const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Déchirer",
          description: `Attaque 1 ennemi. Place un buff d'${BUFFS.ATK} de 25 % sur tous les alliés pendant 1 tour si l'attaque passe en critique.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Grêle",
          description: `Attaque 3 fois tous les ennemis. Possède 50 % de chances de réduire de 30 % le Compteur de Tours.`,
          damage: "1.4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cri de Guerre",
          description: `Place un débuff de ${DEBUFFS.SPD} de 15 % pendant 2 tours sur tous les ennemis. Remplit de 25 % le Compteur de Tours de tous les alliés.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 498",
        "DEF": "881",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des batailles d'Arène de 70`,
};
