const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sonne la Charge",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un buff ${BUFFS.ATK} de 50 % sur un allié pris au hasard pendant 2 tours.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Assaut Aveuglant",
          description: `Attaque un ennemi. Possède 80 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % et un débuff ${DEBUFFS.LEECH} sur la cible pendant 2 tours. Cette attaque passe toujours en critique.`,
          damage: "5.7*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Gardien Fidèle",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur la cible pendant 2 tours et un buff ${BUFFS.DEF} de 60 % sur la cible et ce Champion pendant 2 tours. Place également un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "804",
        "DEF": "1 321",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Cryptes de Faction de 20%`,
};
