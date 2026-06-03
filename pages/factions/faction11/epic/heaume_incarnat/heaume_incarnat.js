const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sous la Ceinture",
          description: `Attaque 1 ennemi. Possède 30% de chances de placer un débuff de ${DEBUFFS.ATK} de 50% pendant 1 tour.`,
          damage: "2.7*ATQ + 2*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Langue Infecte",
          description: `Attaque 4 fois au hasard. Chaque frappe possède 75% de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour. Place, pendant 1 tour, un buff de ${BUFFS.BLOCK_DAMAGE} sur ce Champion.`,
          damage: "1.4*DEF",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "En Garde !",
          description: `Place un buff ${BUFFS.REVIVE_ON_DEATH} et un buff d'${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "15 690",
        "ATQ": "727",
        "DEF": "1 531",
        "VIT": "85",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "15"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés dans les Donjons de 33%.`
};
