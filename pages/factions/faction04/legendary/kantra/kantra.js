const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hachette du Fléau",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 40 % de chances de voler un buff aléatoire à la cible.`,
          damage: "1.6*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tempête du Chaos",
          description: `Attaque 3 fois tous les ennemis. Chaque frappe possède 50 % de chances de placer un des débuffs suivants pendant 2 tours : un débuff de ${DEBUFFS.BLOCK_BUFFS}, un débuff de ${DEBUFFS.ATK} de 50 %, un débuff de ${DEBUFFS.SPD} de 30 %, un débuff d'${DEBUFFS.WEAKEN} de 25 %, un débuff de ${DEBUFFS.PRE} de 50 % ou un débuff de ${DEBUFFS.HEALS} de 100 %.`,
          damage: "1*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pas d'Échappatoire [P]",
          description: `Réduit de 10 la PRÉ de chaque ennemi pour chaque débuff dont ils sont affligés.

Ce Champion subira 4 % de dégâts en moins pour chaque débuff se trouvant sur l'assaillant.

Soigne ce Champion de 1 250 PV à chaque fois qu'un débuff expire sur un ennemi.

Possède 75 % de chances de placer un débuff Provocation d'1 tour sur les ennemis affligés de 5 débuffs au début du tour de ce Champion.

Ce Champion peut placer des débuffs lors de frappes faibles.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "815",
        "DEF": "1 542",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 60`,
};
