const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fendeur d'Os",
          description: `Attaque un ennemi. Possède 20 % de chances de placer un débuff ${DEBUFFS.PROVOKE} d'1 tour si la cible possède plus de PV MAX que ce Champion.`,
          damage: "3.1*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Balayage Désarmant",
          description: `Attaque tous les ennemis. Possède 60 % de chances de placer un débuff ${DEBUFFS.ATK} de 25 % pendant 2 tours.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "En son Sein",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés pendant 2 tours. Place un buff ${BUFFS.HEALS} de 15 % sur ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "804",
        "DEF": "1 222",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Donjons de 20%`,
};
