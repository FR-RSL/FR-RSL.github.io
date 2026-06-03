const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Double Missile",
          description: `Attaque 2 fois un ennemi. Possède 40% de chances de placer un débuff de ${DEBUFFS.SPD} de 30% pendant 2 tours si l'attaque passe en critique.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Valet du Gel",
          description: `Attaque un ennemi. Possède 90% de chances de placer un débuff ${DEBUFFS.GEL} d'1 tour sur tous les ennemis si cette attaque tue l'ennemi.`,
          damage: "5.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Froide Mitraille",
          description: `Attaque tous les ennemis. Réduit de 20% le Compteur de Tours si cette attaque passe en critique. Remplit de 10% le Compteur de Tours de ce Champion si l'attaque passe en critique.`,
          damage: "3.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 498",
        "DEF": "826",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 24%`,
};
