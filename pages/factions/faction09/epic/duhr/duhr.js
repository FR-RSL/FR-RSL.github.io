const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Odieuses Fibres",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "4.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Litanie cannibale",
          description: `Place un buff ${BUFFS.REFLECT_DAM} de 30% sur tous les alliés pendant 2 tours, un buff ${BUFFS.HEALS} de 15% sur tous les alliés pendant 1 tour, puis soigne tous les alliés de 15% de leurs PV MAX.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Encore Faim",
          description: `Ranime 2 alliés aléatoires avec 50% de PV, puis remplit leurs Compteurs de Tour de 50%.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 068",
        "DEF": "1 068",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 30%`,
};
