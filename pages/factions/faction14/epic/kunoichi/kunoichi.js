const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coupe-Muscle",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "3.1*DEF",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Poison perçant",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "3.7*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "S'interposer",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50% sur tous les alliés sauf cette Championne pendant 2 tours. Remplit le Compteur de Tour de cette Championne de 50%.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Courage acharné [P]",
          description: `Place un buff ${BUFFS.BLOCK_DAMAGE} sur cette Championne pendant 1 tour lorsque ses PV tombent sous 50%.`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "782",
        "DEF": "1 332",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
