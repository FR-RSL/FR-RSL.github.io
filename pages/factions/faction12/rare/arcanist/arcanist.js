const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Toucher Paralysant",
          description: `Attaque un ennemi. Possède 20% de chances de placer un débuff de ${DEBUFFS.SLEEP} d'1 tour.`,
          damage: "4*ATQ",
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Guérison Contre Nature",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.HEALS} de 15% sur tous les alliés.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vigueur",
          description: `Place un buff d'${BUFFS.ATK} de 25% et un buff d'${BUFFS.CRATE} de 15% sur tous les alliés pendant 3 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "991",
        "DEF": "848",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des batailles d'Arène de 25%`,
};
