const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Réprimande",
          description: `Attaque 1 ennemi. Possède 50 % de chances de retirer 1 buff aléatoire sur chaque cible.`,
          damage: "5*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sanction",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.LOCK_ACTIVE} et un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. Il est impossible de résister à ces débuffs.`,
          damage: "0.3*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Zone de Protection",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.BLOCK_DAMAGE} sur tous les alliés.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "24 780",
        "ATQ": "947",
        "DEF": "980",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
