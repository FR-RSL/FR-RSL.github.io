const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sang d'Innocent",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 15 % des dégâts infligés.`,
          damage: "3.75*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fureur de Pleine Lune",
          description: `Attaque 6 fois un ennemi. La première frappe possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 3 tours. Soigne ce Champion à hauteur de 25 % des dégâts infligés.
Soigne, à la place, ce Champion de 50 % des dégâts infligés si la cible est affligée d'un débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}.`,
          damage: "0.97*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +15%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hurlement du Chasseur",
          description: `Place, pendant 3 tours, un buff d'${BUFFS.ATK} de 50 % sur tous les alliés, puis attaque 3 fois un ennemi.

Chaque frappe possède 50 % de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} d'1 tour. Possède 50 % de chances de placer un débuff ${DEBUFFS.FEAR} d'1 tour sur 2 ennemis pris au hasard si le débuff ${DEBUFFS.TRUE_FEAR} est placé.`,
          damage: "2.3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mode Bestial [P]",
          description: `${PASSIVE}

Dégâts augmentés de 40 % lorsque les PV de ce Champion tombent sous 40 %.

${ACTIVE}

Ranime ce Champion avec 20 % de PV lorsqu'il se fait tuer. Accorde immédiatement un Tour Supplémentaire.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 815",
        "ATQ": "1 465",
        "DEF": "793",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
