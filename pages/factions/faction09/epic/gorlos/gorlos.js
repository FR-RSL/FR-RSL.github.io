const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hampes Affamées",
          description: `Attaque 2 fois un ennemi. Chaque frappe remplit le Compteur de Tour de ce Champion de 10% si la cible se trouve sous débuff ${DEBUFFS.DEF}, ${DEBUFFS.BURN} ou ${DEBUFFS.PRE}.`,
          damage: "1.95*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Faim Intense",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Crocs Grinçants",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.BURN} et un débuff ${DEBUFFS.PRE} de 50% pendant 3 tours. Remplit le Compteur de Tours de ce Champion de 20% si l'attaque passe en critique.`,
          damage: "6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 354",
        "DEF": "1 101",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de la Tour du Malheur de 30%`,
};
