const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Craquement d'Os",
          description: `Attaque un ennemi. Possède 35% de chances de réduire le Compteur de Tour de la cible de 10%.`,
          damage: "0.19*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Piétinement",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.SPD} de 15% pendant 2 tours.`,
          damage: "0.27*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fracture du Crâne",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "0.28*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "694",
        "DEF": "1 002",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
