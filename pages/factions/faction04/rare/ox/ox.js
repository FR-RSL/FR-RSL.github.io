const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Assaut",
          description: `Attaque un ennemi. Remplit de 10% le Compteur de Tours de ce Champion si l'attaque passe en critique.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fracasser les Défenses",
          description: `Attaque un ennemi. Possède 60% de chances de placer un débuff de ${DEBUFFS.DEF} de 30% pendant 2 tours.`,
          damage: "7.1*ATQ",
          cooldown: 3,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Confiance Détruite",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours. Possède 15% de chances de porter un coup critique.`,
          damage: "8*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 225",
        "ATQ": "1 167",
        "DEF": "1 046",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Faction de 18%`,
};
