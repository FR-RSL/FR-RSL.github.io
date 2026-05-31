const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Feu de cadavre",
          description: `Attaque 2 fois un ennemi. Active instantanément tout débuff ${DEBUFFS.BURN} sur la cible après avoir attaqué.`,
          damage: "0.11*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bûcher exalté",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.BURN} sur tous les ennemis pendant 2 tours. Il est impossible de résister à ce débuff.`,
          damage: "0.23*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Équilibre de la Mort",
          description: `Égalise les PV de tous les alliés, puis attaque 1 ennemi.

Les niveaux de PV de tous les alliés seront amenés au niveau de l'allié ayant le plus de PV. 

Cette attaque ignorera 30 % de la DÉF de la cible si les PV actuels de la cible sont inférieurs ou égaux aux PV actuels de ce Champion.

Réduira d'1 tour le temps de recharge de la compétence Bûcher exalté si les PV actuels de la cible sont supérieurs aux PV actuels de ce Champion.`,
          damage: "0.35*HP",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Forteresse [P]",
          description: `Renvoie sur l'assaillant 30 % des dégâts reçus par ce Champion si ce Champion possède 50 % de PV ou plus.

Inflige 30 % de dégâts en plus si ce Champion possède moins de 50 % de PV.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 130",
        "ATQ": "870",
        "DEF": "1 167",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 30%`,
};
