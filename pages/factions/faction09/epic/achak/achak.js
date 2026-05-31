const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dévorer tout Espoir",
          description: `Attaque un ennemi. Possède 30 % de chances de réduire la durée d'un buff aléatoire si la cible se trouve sous débuff ${DEBUFFS.BURN}. Possède également 30 % de chances de réduire le Compteur de Tour de la cible de 15 % si elle se trouve sous débuff ${DEBUFFS.GEL}.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Puissance Cannibale",
          description: `Place sur tous les alliés un buff ${BUFFS.BLOCK_DEBUFFS} pendant 1 tour et un buff ${BUFFS.STRENGTHEN} de 25 % pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vent Feu de Glace",
          description: `Attaque tous les ennemis. Possède 70 % de chances de placer un débuff ${DEBUFFS.GEL} d'1 tour sur les ennemis dont l'ATQ est plus élevée que la DÉF. Possède 70 % de chances de placer un débuff ${DEBUFFS.BURN} d'1 tour sur les ennemis dont la DÉF est plus élevée que l'ATQ.`,
          damage: "5.5*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Faim Tordue [P]",
          description: `Soigne tous les alliés de 5 % de leurs PV MAX chaque fois qu'un ennemi sous débuff ${DEBUFFS.BURN} joue un tour. 

Remplit le Compteur de Tour de tous les alliés de 10 % chaque fois qu'un ennemi sous débuff ${DEBUFFS.GEL} joue un tour.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "947",
        "DEF": "1 189",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 25%`,
};
