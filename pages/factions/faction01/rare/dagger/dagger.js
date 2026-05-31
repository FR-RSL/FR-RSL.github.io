const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Doubles Dagues",
          description: `Attaque 2 fois un ennemi. Chaque coup critique réduit le Compteur de Tour de la cible de 4 %.`,
          damage: "1.65*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sabotage Précis",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "3.65*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Couteau Brise-épée",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.ATK} de 25 % pendant 2 tours. Par contre, possède 50 % de chances de placer sur la cible un débuff ${DEBUFFS.ATK} de 50 % si la cible est affligée d'un débuff ${DEBUFFS.DEF}.`,
          damage: "5.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 387",
        "DEF": "793",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Faction de 20%`,
};
