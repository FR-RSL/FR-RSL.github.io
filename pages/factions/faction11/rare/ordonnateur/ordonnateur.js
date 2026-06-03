const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lourde Punition",
          description: `Attaque un ennemi. Possède 25% de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Colliers d'Obéissance",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff ${DEBUFFS.BOMB} qui détonera après 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Exécuteur [P]",
          description: `Lorsque ce Champion est attaqué, possède 30% de chances de réduire d'1 tour la durée de tous les décomptes de détonation des débuffs ${DEBUFFS.BOMB}.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 321",
        "DEF": "793",
        "VIT": "100",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = null;
