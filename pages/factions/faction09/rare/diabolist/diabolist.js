const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tourment",
          description: `Attaque 1 ennemi. Possède 10% de chances de placer un débuff de ${DEBUFFS.SLEEP} pendant 1 tour.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tempête Électrique",
          description: `Attaque tous les ennemis. Place un buff d'${BUFFS.SPD} de 30% sur tous les alliés pendant 2 tours.`,
          damage: "3.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Charge Positive",
          description: `Remplit de 15% le Compteur de Tours de tous les alliés. Réduit de 15% le Compteur de Tours de tous les ennemis.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "1 002",
        "DEF": "782",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
