const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Porteuse de Silence",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 30 % de chances de placer un débuff de ${DEBUFFS.SLEEP} d'1 tour.`,
          damage: "1.6*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Épée Fluide",
          description: `Attaque un ennemi. Possède 70 % de chances de réduire de 50 % le Compteur de Tour de la cible. Remplit le Compteur de Tour de ce Champion d'une valeur équivalent à la somme des pertes de la cible.`,
          damage: "6.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Copieuse Hémorragie",
          description: `Attaque tous les ennemis. Possède 80 % de chances de placer un débuff de ${DEBUFFS.HEALS} de 50 % pendant 1 tour.`,
          damage: "3.8*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 134",
        "DEF": "980",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Faction de 17%`,
};
