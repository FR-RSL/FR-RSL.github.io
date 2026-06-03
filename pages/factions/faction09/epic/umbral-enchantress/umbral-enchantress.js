const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sceptre d'Essence",
          description: `Attaque un ennemi. Les dégâts augmentent à mesure que les PV actuels baissent.`,
          damage: "(3.3+(1-Current HP%))*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Immolation",
          description: `Attaque tous les ennemis. Possède 80% de chances de placer un débuff de ${DEBUFFS.BLOCK_BUFFS} de 3 tours.`,
          damage: "3.6*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mal Immortel",
          description: `Attaque tous les ennemis. Possède 80% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 2 tours. Place un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 2 tours. Place un débuff ${DEBUFFS.LOCK_ACTIVE} sur ce Champion pendant 5 tours. Il est impossible de résister au débuff ${DEBUFFS.LOCK_ACTIVE}, de le bloquer et de le retirer.`,
          damage: "4*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "925",
        "DEF": "1 354",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
