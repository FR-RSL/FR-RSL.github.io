const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Berceuse de Source",
          description: `Attaque un ennemi. Possède 15% de chances de placer un débuff de ${DEBUFFS.SLEEP} pendant 1 tour.`,
          damage: "5.2*ATQ",
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Peau de Chêne",
          description: `Place un buff d'${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours. Soigne tous tes alliés à hauteur de 25% des PV MAX de ce Champion.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Flétrir",
          description: `Attaque tous les ennemis. Réduit d'1 tour la durée de tous les buffs ennemis.`,
          damage: "4*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "991",
        "DEF": "1 123",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `
Augmente la statistique RÉS des Alliés lors des Donjons de 70`,
};
