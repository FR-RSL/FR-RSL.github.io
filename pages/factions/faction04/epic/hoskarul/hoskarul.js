const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gourdin d'ermite",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "3.85*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tabassage continu",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Réduit de 15 % le Compteur de Tour des ennemis sous débuffs ${DEBUFFS.STUN}.`,
          damage: "4.1*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +25%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Impassible",
          description: `Retire tous les débuffs ${DEBUFFS.STUN} de tous les alliés, puis place un buff ${BUFFS.DEF} de 60 % et un buff ${BUFFS.RES} de 25 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Finir l'ennemi [P]",
          description: `Immunisé contre les débuffs ${DEBUFFS.STUN}. 

Augmente de 15 % les dégâts infligés par tous les alliés lorsqu'ils attaquent des ennemis sous débuffs ${DEBUFFS.STUN}.`,
          isPassive: true
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
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 30%`,
};
