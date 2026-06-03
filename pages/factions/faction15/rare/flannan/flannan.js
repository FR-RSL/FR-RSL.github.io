const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frapper l'enclume",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 25 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.${RETURN}${RETURN}

Chaque frappe possède également 35 % de chances de réduire le Compteur de Tour de la cible de 5 %.${RETURN}${RETURN}

Si la cible se trouve sous un débuff ${DEBUFFS.SPD} placé par ce Champion, réduit plutôt le Compteur de Tour de la cible de 10 %.`,
          damage: "1.6*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fracasser des genoux",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 15 % pendant 2 tours.`,
          damage: "3.4*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Forgeron rassembleur",
          description: `Place un buff ${BUFFS.PRE} de 25 % sur tous les alliés pendant 2 tours, puis fait équipe avec un allié aléatoire pour attaquer l'ennemi ciblé.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rythme du marteau [P]",
          description: `Possède 50 % de chances d'accorder un Tour supplémentaire lorsque ce Champion place un débuff ${DEBUFFS.SPD} sur 3 ennemis ou plus avec sa compétence Fracasser des genoux.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "617",
        "DEF": "1 365",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
