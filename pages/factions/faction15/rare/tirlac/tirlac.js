const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Arc d'ombre",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.ATK} de 25 % pendant 1 tour.`,
          damage: "3.4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bande véloce",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.SPD} de 15 % sur tous les alliés pendant 2 tours.`,
          damage: "3.6*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Diversion",
          description: `Place un buff ${BUFFS.VEIL} sur tous les alliés sauf ce Champion pendant 1 tour. 

Place également sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 20 % des PV MAX de ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Camouflé [P]",
          description: `Réduit de 5 % les dégâts infligés par des compétences à tous les alliés sous buffs ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "793",
        "DEF": "1 233",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
