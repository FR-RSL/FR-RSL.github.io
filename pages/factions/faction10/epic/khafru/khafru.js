const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Glaive en os",
          description: `Attaque un ennemi. Possède 50% de chances de transférer 1 débuff aléatoire de ce Champion sur la cible.`,
          damage: "3.9*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ordre de Khafru",
          description: `Attaque tous les ennemis. Avant d'attaquer, retire 1 débuff aléatoire sur tous les alliés. Les dégâts augmentent de 5% pour chaque débuff retiré.${RETURN}${RETURN}

Soigne également chaque allié de 10% des PV MAX de ce Champion si un débuff leur a été retiré.`,
          damage: "4.1*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Harceler les vivants",
          description: `Place un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 1 tour et un buff ${BUFFS.TAUNT} sur eux pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Gardien de Nekhret [P]",
          description: `Réduit les dégâts reçus par tous les alliés de 10%. Ce Champion recevra ces dégâts à la place.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "749",
        "DEF": "1 332",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
