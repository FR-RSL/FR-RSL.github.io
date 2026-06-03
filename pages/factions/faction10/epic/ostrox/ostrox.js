const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Inversion de douleur",
          description: `Attaque un ennemi. Possède 70% de chances de transférer un débuff aléatoire de ce Champion sur la cible.${RETURN}${RETURN}

Soigne également l'allié ayant le moins de PV de 10% de ses PV MAX.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Déferlement vertébral",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Si 3 ennemis ou moins sont vivants, possède 75% de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} sur chaque ennemi pendant 2 tours.${RETURN}${RETURN}

Si 4 ennemis ou plus sont vivants, possède 75% de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} sur chaque ennemi pendant 3 tours.`,
          damage: "3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Perception de mort",
          description: `Retire un débuff aléatoire sur tous les alliés et leur accorde un buff ${BUFFS.PRE} de 50% pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Miroir osseux [P]",
          description: `Dès qu'un ennemi essaie de placer un débuff sur ce Champion, possède 20% de chances de le renvoyer sur l'assaillant.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 167",
        "DEF": "1 035",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
