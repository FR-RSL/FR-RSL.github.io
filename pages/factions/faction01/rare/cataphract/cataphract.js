const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe Assurée",
          description: `Attaque 1 ennemi. Possède 20 % de chances de placer sur la cible un débuff de ${DEBUFFS.PRE} de 50 % pendant 1 tour.`,
          damage: "4.3*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fortifier",
          description: `Place un buff de ${BUFFS.BLOCK_DEBUFFS} et un buff d'${BUFFS.DEF} de 60 % sur ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Coupheaume",
          description: `Attaque 1 ennemi. Ignorera la DÉF si la cible possède moins de 50 % de PV. Les dégâts augmentent en fonction des PV MAX de ce Champion.`,
          damage: "3.9*ATQ+0.1*HP",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "991",
        "DEF": "815",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des batailles d'Arène de 25%`,
};
