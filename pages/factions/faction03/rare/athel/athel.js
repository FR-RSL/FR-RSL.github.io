const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Foudroyer",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "1.3*ATQ + 30",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lames Divines",
          description: `Attaque tous les ennemis. Possède 15 % de chances supplémentaires de porter un coup critique.`,
          damage: "4.1*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bénédiction Supérieure",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 25 % sur ce Champion. Place, pendant 2 tours, un buff d'${BUFFS.DEF} de 30 % sur ce Champion si les PV actuel de ce Champion sont inférieurs à 50 %. Reçoit un Tour Supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 189",
        "DEF": "936",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 15%`,
};
