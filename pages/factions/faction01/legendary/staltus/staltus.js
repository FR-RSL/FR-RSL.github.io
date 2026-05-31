const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hache de gloire",
          description: `Attaque 2 fois un ennemi. Si la cible se trouve sous un débuff, chaque frappe réduit le Compteur de Tour de la cible de 10 %.`,
          damage: "1.9*DEF",
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tactiques chasse-drake",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe possède 50 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "2.1*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Coeur de dragon",
          description: `Place un buff ${BUFFS.DEF} de 60 % sur ce Champion pendant 3 tours, puis attaque tous les ennemis. 

Possède 75 % de chances de placer un débuff ${DEBUFFS.CDAM} de 25 % pendant 2 tours sur les ennemis dont l'ATQ est plus élevée que leur DÉF. 

Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours sur les ennemis dont l'ATQ est inférieure ou égale à leur DÉF.`,
          damage: "4*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sans tache [P]",
          description: `Dès qu'un ennemi essaie de placer un débuff ${DEBUFFS.WEAKEN}, ${DEBUFFS.DEF} ou ${DEBUFFS.POISON} sur ce Champion, les renvoie sur l'assaillant. 

Les dégâts augmentent de 5 % pour chaque débuff dont est affligée la cible.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "738",
        "DEF": "1 454",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%`,
};
