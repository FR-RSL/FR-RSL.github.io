const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Croisée",
          description: `Attaque 2 fois un ennemi. Possède 25 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour.`,
          damage: "0.13*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Colère Éternelle",
          description: `Retire tous les débuffs sur ce Champion et un débuff pris au hasard sur tous les alliés, puis soigne ce Champion de 100 % de ses PV MAX et soigne tous les alliés de 50 % des soins en surplus. Après coup, place un buff ${BUFFS.REFLECT_DAM} de 30 % sur tous les alliés pendant 2 tours, puis accorde un Tour supplémentaire à ce Champion.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Maîtriser",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.`,
          damage: "0.42*PV",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 815",
        "ATQ": "1 013",
        "DEF": "969",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
