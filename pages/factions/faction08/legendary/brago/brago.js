const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tabassage en Fusion",
          description: `Attaque un ennemi. Possède 20% de chances de réduire d'1 tour la durée de tous les buffs.`,
          damage: "3.6*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Charge Intrépide",
          description: `Place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 3 tours, puis attaque 1 ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Possède 75% de chances de placer un débuff ${DEBUFFS.STUN} pendant 2 tours si la cible possède deux buffs ou plus.`,
          damage: "5.1*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tempête de Bataille",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.${RETURN}${RETURN}

Place également un débuff ${DEBUFFS.ATK} de 50% sur tous les ennemis pendant 2 tours si Brago d'Acier se trouve sous buff ${BUFFS.DEF}.`,
          damage: "3.7*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bestow Strength [P]",
          description: `Increases the DEF of all allies by 10% of this Champion’s DEF.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "881",
        "DEF": "1 487",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de la Tour du Malheur de 34%`,
};
