const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vendanges de Sang",
          description: `Attaque 3 fois un ennemi. Possède 30% de chances de placer un débuff de ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Horrible Terreur",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour sur tous les ennemis. Place un débuff de ${DEBUFFS.SPD} de 30% pendant 2 tours si la cible ne souffre pas du débuff d'${DEBUFFS.STUN}.`,
          damage: "4.8*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Nuée de Chauves-souris",
          description: `Attaque tous les ennemis. Réduit de 75% le Compteur de Tours.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 454",
        "DEF": "991",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
