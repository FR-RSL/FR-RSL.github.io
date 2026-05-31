const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hache Frénétique",
          description: `Attaque 2 fois un ennemi. Possède 80 % de chances d'ignorer 15 % de la DÉF de la cible si ce Champion possède 50 % de PV ou plus. Possède 10 % de chances de placer un débuff ${DEBUFFS.STUN} d'1 tour si ce Champion possède moins de 50 % de PV.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Courage Nain",
          description: `Place un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Haches pour Tous [P]",
          description: `Possède 5 % de chances de contre-attaquer lorsqu'il est touché. Possède 25 % de chances de contre-attaquer lorsqu'il est frappé par un coup critique.`,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "10 575",
        "ATQ": "1 321",
        "DEF": "1 002",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
