const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Doubles griffes du Lion",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 60 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.

Dégâts augmentés de 20 % si la cible possède moins de 60 % de PV.`,
          damage: "1.65*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rage de la Troupe",
          description: `Attaque 2 fois tous les ennemis.

${PASSIVE}

Ce Champion est immunisé contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR} et ${DEBUFFS.PETRIFICATION} lorsque cette Compétence n'est pas en recharge.`,
          damage: "2*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rugissement terrifiant",
          description: `Attaque tous les ennemis. Possède 80 % de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} pendant 1 tour. 

Avant d'attaquer, possède 80 % de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 25 % sur tous les ennemis pendant 2 tours.`,
          damage: "3.85*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Courage Absolu [P]",
          description: `${ACTIVE}

Place instantanément un buff ${BUFFS.UNKILLABLE} d'1 tour sur ce Champion avant qu'il reçoive un coup fatal.

${PASSIVE}

Les dégâts augmentent à mesure que les PV du Champion baissent (+1 % par 1 % de PV perdus).`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "1 409",
        "DEF": "936",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 24%`,
};
