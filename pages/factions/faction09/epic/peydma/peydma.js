const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tourmenter",
          description: `Attaque 2 fois un ennemi. Si cette attaque passe en critique, possède 85% de chances de placer, pendant 2 tours, un débuff de ${DEBUFFS.ATK} de 50% sur tous les ennemis.`,
          damage: "1.2*DEF+ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Déformation de Chair",
          description: `Attaque tous les ennemis. Possède 35% de chances de placer un débuff de ${DEBUFFS.PRE} de 50% pendant 2 tours.`,
          damage: "3.3*DEF+ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Détourner",
          description: `Attaque 1 ennemi. Retire tous les buffs de la cible et les place sur ce Champion.`,
          damage: "6*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "826",
        "DEF": "1 299",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
