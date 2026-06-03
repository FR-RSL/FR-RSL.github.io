const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tir Instantané",
          description: `Attaque 1 ennemi. Possède 15% de chances de porter un coup supplémentaire.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Regard Affûté",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.CRATE} de 30% sur ce Champion. Octroie un Tour Supplémentaire.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Flèche Brutale",
          description: `Attaque 1 ennemi. Offre 50% de chances de placer un débuff d'${DEBUFFS.STUN} pendant 1 tour. Offre 50% de chances de placer un débuff de ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "5.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +15%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 167",
        "DEF": "936",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
