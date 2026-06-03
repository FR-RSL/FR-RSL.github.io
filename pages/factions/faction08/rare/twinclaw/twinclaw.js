const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Défigurer",
          description: `Attaque un ennemi. Possède 35% de chances de placer un débuff de ${DEBUFFS.HEALS} de 100% pendant 2 tours.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Taille-tendon",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 15% pendant 2 tours.`,
          damage: "5.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tear to Shreds",
          description: `Attacks 1 enemy. Has a 50% chance of placing a ${DEBUFFS.LOCK_ACTIVE} debuff for 2 turns. The chance increases to 100% if the target is under a ${DEBUFFS.HEALS} debuff.`,
          damage: "5.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 565",
        "ATQ": "1 365",
        "DEF": "892",
        "VIT": "85",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
