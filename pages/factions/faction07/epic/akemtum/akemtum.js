const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Griffes toxiques",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 40 % de chances de placer un débuff ${DEBUFFS.POISON} de 5 % pendant 2 tours.${RETURN}${RETURN}

Si la cible se trouve sous débuff ${DEBUFFS.HEX}, chaque frappe possède également 40 % de chances d'appliquer un effet de ${PROP_DEBUFF}, prenant 1 débuff aléatoire de la cible pour le placer sur tous les ennemis.`,
          damage: "1.1*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Imprécation immortelle",
          description: `Attaque 3 fois tous les ennemis. Chaque frappe possède 60 % de chances d'augmenter d'1 tour la durée des débuffs ${DEBUFFS.HEX} sur les ennemis.${RETURN}${RETURN}

Si les ennemis ne se trouvent pas sous débuff ${DEBUFFS.HEX}, chaque frappe possède 60 % de chances de placer un débuff ${DEBUFFS.HEX} pendant 2 tours.`,
          damage: "1*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sang maudit [P]",
          description: `Possède 80 % de chances d'infliger les dégâts d'un débuff ${DEBUFFS.POISON} aux ennemis sous débuff ${DEBUFFS.HEX} dès que leurs alliés reçoivent des dégâts des débuffs ${DEBUFFS.POISON}.`,
          damage: "Damage Dealt",
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 354",
        "DEF": "881",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 18%`,
};
