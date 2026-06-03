const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Croissant Tueur",
          description: `Attaque 1 ennemi. Offre 15% de chances de placer un débuff de ${DEBUFFS.PRE} de 25% pendant 2 tours.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Intervention",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.ALLY_PROTECT} de 50% sur 2 alliés choisis au hasard.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Défense Profonde [P]",
          description: `Si un allié reçoit un coup critique, lui octroie un buff de ${BUFFS.HEALS} de 15% pendant 1 tour.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "870",
        "DEF": "991",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 21%`,
};
