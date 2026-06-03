const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Furie Rouge",
          description: `Attaque un ennemi. Possède 30% de chances de réduire le Compteur de Tour de la cible de 7.5%. Réduit le Compteur de Tour de 3% supplémentaires pour chaque débuff dont est affligée la cible.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Exiger la Chevalerie",
          description: `Attaque un ennemi. Possède 50% de chances de retirer 2 buffs pris au hasard sur la cible avant d'attaquer. Par contre, possède 75% de chances de voler 2 buffs aléatoires sur la cible si la cible possède 4 buffs ou plus.`,
          damage: "5.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Seigneur Incarnat",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.ATK} de 50% et un débuff ${DEBUFFS.PRE} de 50% sur tous les ennemis pendant 2 tours.`,
          damage: "3.85*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 454",
        "DEF": "793",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Faction de 29%`,
};
