const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sape la Promptitude",
          description: `Attaque 2 fois au hasard. Chaque frappe possède 35 % de chances de placer un débuff de ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Colère Libérée",
          description: `Attaque tous les ennemis. Chaque coup critique remplit le Compteur de Tour de ce Champion de 20 %.`,
          damage: "3.7*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Seigneur de Guerre",
          description: `Attaque un ennemi et vole le Compteur de Tour de la cible. Place un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours si cette attaque passe en critique.`,
          damage: "5.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 487",
        "DEF": "1 046",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Donjons de 24%`,
};
