const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Broyeur de crânes",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "3.3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bâton de feu",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.STRENGTHEN} de 25 % sur tous les alliés pendant 2 tours.`,
          damage: "3.6*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Têtu comme une mule [P]",
          description: `Place sur ce Champion un buff ${BUFFS.SHIELD} pendant 2 tours, équivalent à 10 % de ses PV MAX, lorsqu'il est frappé par un ennemi sous débuff ${DEBUFFS.PROVOKE}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "804",
        "DEF": "1 222",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
