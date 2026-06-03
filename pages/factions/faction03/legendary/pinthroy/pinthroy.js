const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Auteur de Destinées",
          description: `Attaque un ennemi. Transfère un débuff aléatoire de ce Champion sur la cible. Possède également 75% de chances de voler un buff aléatoire à la cible.`,
          damage: "4.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Verbe sacré",
          description: `Place un buff ${BUFFS.PRE} de 50% sur tous les alliés pendant 2 tours, puis attaque tous les ennemis. Place un débuff ${DEBUFFS.HEALS} de 100% sur tous les ennemis pendant 2 tours. Possède également 75% de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Les Champions des Factions des Rejetons Démoniaques, des Morts-vivants et des Revenants Chevaliers ne peuvent pas résister à ces débuffs.`,
          damage: "4.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Reflet de Gloire",
          description: `Soigne tous les alliés de 30% de leurs PV MAX, puis place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours. Si 4 alliés ou plus sont en vie, place également sur chaque allié un buff ${BUFFS.SHIELD} égal à 30% de ses PV MAX pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Splendor [P]",
          description: `Removes all ${DEBUFFS.DEF} debuffs and ${DEBUFFS.WEAKEN} debuffs from this Champion at the start of each turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "1 057",
        "DEF": "1 178",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 50`,
};
