const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Festin de Flammes",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 25% des dégâts infligés. Soigne, à la place, ce Champion de 50% des dégâts infligés si la cible est affligée d'un débuff de ${DEBUFFS.BURN}.`,
          damage: "2.5*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Torrent Feu de l'enfer",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff de ${DEBUFFS.BURN} de 2 tours sur tous les ennemis.`,
          damage: "3.6*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sbires Infernaux",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.ALLY_PROTECT} de 50% sur tous les alliés sauf sur ce Champion. Place un buff d'${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Feux de Ruine [P]",
          description: `Réduit de 10% les dégâts infligés par les ennemis affligés de débuffs ${DEBUFFS.BURN}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 975",
        "ATQ": "771",
        "DEF": "1 343",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
