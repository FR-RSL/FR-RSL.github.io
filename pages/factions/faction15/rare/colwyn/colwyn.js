const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épée de Sylvain",
          description: `Attaque un ennemi. Place un buff ${BUFFS.PRE} de 25% sur ce Champion pendant 2 tours.`,
          damage: "2.9*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Prendre par surprise",
          description: `Attaque un ennemi. Possède 25% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "4.5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tempête du Bois de Brume",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.DEF} de 30% sur tous les alliés pendant 2 tours.`,
          damage: "3.1*DEF",
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "727",
        "DEF": "1 288",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
