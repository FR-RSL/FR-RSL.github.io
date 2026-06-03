const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Balafre Éclair",
          description: `Attaque tous les ennemis.`,
          damage: "2.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Toucher de la Nature",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 50% sur tous les alliés, puis retire tous les débuffs sur tous les alliés. Il est impossible de retirer ce buff.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Étreinte de Maman",
          description: `Place, pendant 3 tours, un buff de ${BUFFS.REVIVE_ON_DEATH} sur la cible allié. L'allié sera ressuscité instantanément s'il se fait tuer.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "980",
        "DEF": "1 123",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
