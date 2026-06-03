const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vents d'Hiver",
          description: `Attaque un ennemi. A 30 % de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour. Il est impossible de résister à ce débuff.${RETURN}${RETURN}

Place un buff ${BUFFS.PERFECT_VEIL} pendant 2 tours sur l'allié ayant le moins de PV.`,
          damage: "4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Souffle d'Engelure",
          description: `Attaque tous les ennemis. A 70 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % et un débuff ${DEBUFFS.PRE} de 50 % pendant 2 tours. Il est impossible de résister à ces débuffs.${RETURN}${RETURN}

Place également un buff ${BUFFS.CDAM} de 30 % sur tous les alliés pendant 2 tours.`,
          damage: "4*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Armure Tombegel",
          description: `Place un buff ${BUFFS.STRENGTHEN} de 25 % et un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

A 60 % de chances de placer un débuff ${DEBUFFS.GEL} sur tous les ennemis pendant 1 tour. Il est impossible de résister à ce débuff.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 035",
        "DEF": "1 233",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 33%`,
};
