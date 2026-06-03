const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Purgatoire",
          description: `Attaque un ennemi. Possède 30% de chances de réduire le Compteur de Tour de la cible de 10%. Sinon, possède 60% de chances si la cible est affligée d'un débuff ${DEBUFFS.BURN}.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Perte de Temps",
          description: `Possède 75% de chances de réduire le Compteur de Tour de tous les ennemis de 15%.${RETURN}${RETURN}

Remplit le Compteur de Tour de tous les alliés de 15%.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Flammes Célestes",
          description: `Possède 75% de chances de placer un débuff ${DEBUFFS.BURN} sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Place un buff ${BUFFS.ATK} de 50% sur tous les alliés pendant 3 tours.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 244",
        "DEF": "1 156",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
