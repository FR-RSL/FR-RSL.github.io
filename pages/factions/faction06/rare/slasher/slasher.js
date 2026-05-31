const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Balafre Redoutable",
          description: `Attaque un ennemi.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hache menu",
          description: `Attaque 2 fois un ennemi. Offre 25 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 2 tours.`,
          damage: "2.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Zèle Meurtrier",
          description: `Place un buff d'${BUFFS.CRATE} de 15 % et un buff de ${BUFFS.SHIELD} de 2 tours sur ce Champion. La valeur du ${BUFFS.SHIELD} est proportionnelle à la ATQ et au DÉG C. de ce Champion. Accorde un Tour Supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 332",
        "DEF": "826",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Faction de 17%`,
};
