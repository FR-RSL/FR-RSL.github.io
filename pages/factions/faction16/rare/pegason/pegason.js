const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe stupéfiante",
          description: `Attaque un ennemi. 

A 15 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "0.21*PV",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Position de l'acier",
          description: `Place un buff ${BUFFS.TAUNT} sur ce Champion pendant 1 tour. 

Place également sur tous les alliés un buff ${BUFFS.SHIELD} pendant 2 tours, équivalent à 15 % des PV MAX de ce Champion.`,
          cooldown: 6,
          levelInfo: ["Bouclier +10%", "Bouclier +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Discipline militaire [P]",
          description: `Dès que ce Champion est attaqué, a 5 % de chances de réduire à zéro tous les dégâts en approche.`,
          cooldown: 1,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: true,
        }
  ],
  stats: {
        "PV": "19 320",
        "ATQ": "727",
        "DEF": "1 013",
        "VIT": "96",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Allies lors de toutes les Batailles de 15%.`
};
