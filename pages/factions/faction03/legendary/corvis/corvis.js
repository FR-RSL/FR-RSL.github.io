const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Processus réducteur",
          description: `Attaque un ennemi. Possède 40% de chances de placer un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "3.1*DEF",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Miracle médical",
          description: `Attaque 2 fois tous les ennemis. La première frappe augmente d'1 tour la durée de tous les débuffs sur les ennemis. La seconde frappe augmente d'1 tour la durée de tous les buffs sur les alliés.`,
          damage: "1.9*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Recherche de terrain",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe possède 75% de chances de placer deux débuffs ${DEBUFFS.POISON} de 5% pendant 2 tours.${RETURN}${RETURN}

Après l'attaque, place un débuff ${DEBUFFS.POISON_S} de 25% sur les ennemis affligés de 2 débuffs ${DEBUFFS.POISON} ou plus.`,
          damage: "2*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Curieuse gorgée [P]",
          description: `Réduit les dégâts qu'infligent les ennemis sous débuffs ${DEBUFFS.POISON} (5% de dégâts en moins par débuff ${DEBUFFS.POISON}, s'accumule jusqu'à 25%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "903",
        "DEF": "1 398",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%`,
};
