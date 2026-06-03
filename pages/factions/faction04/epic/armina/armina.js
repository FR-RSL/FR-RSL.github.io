const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton Disciplinaire",
          description: `Attaque un ennemi. Possède 35% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fureur Piétinante",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours. Vole 7,5% du Compteur de Tour des cibles sous débuffs ${DEBUFFS.DEF}.`,
          damage: "4.05*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hurlement Fracassant",
          description: `Réduit le Compteur de Tour de tous les ennemis de 20%. Possède 75% de chances de placer un débuff ${DEBUFFS.STUN} d'1 tour sur les ennemis dont le Compteur de Tour est totalement vidé.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tête de Vapeur [P]",
          description: `Remplit de 10% le Compteur de Tour de ce Champion chaque fois qu'un ennemi reçoit un un débuff ${DEBUFFS.STUN}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "1 354",
        "DEF": "683",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
