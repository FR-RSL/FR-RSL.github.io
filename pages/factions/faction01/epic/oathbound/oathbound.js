const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fracasser",
          description: `Attaque 1 ennemi. Possède 20% de chances de placer un débuff de ${DEBUFFS.GEL} pendant 1 tour. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "1.5*ATQ+2.7*DEF",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Subjuguer",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.ATK} de 50% sur tous les ennemis pendant 2 tours. Possède également 55% de chances de réduire de 20% le Compteur de Tour de chaque cible.`,
          damage: "4*DEF",
          cooldown: 3,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Intimider",
          description: `Attaque 4 fois au hasard. Chaque attaque possède 30% de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.${RETURN}${RETURN}

Les chances de débuff ${DEBUFFS.LOCK_ACTIVE} augmentent jusqu'à 100% si la cible est affligée d'un débuff ${DEBUFFS.ATK}.`,
          damage: "1.65*DEF",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "782",
        "DEF": "1 299",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
